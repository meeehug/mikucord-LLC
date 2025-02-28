document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".about, .team-member");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight * 0.8) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on page load in case elements are already in view
});
// Team members
const teamMembers = [
    { name: "Chester Estaris", title: "Chief Executive Officer", alias: "Mehug", img: "img/mehug.png", description: "Leading the company with a vision for innovation and community growth.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Ethan Yu", title: "Chief Marketing Officer", alias: "Halo", img: "img/halo.png", description: "Building the brand and reaching new audiences with strategic campaigns.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Leandro Arellano", title: "Chief Financial Officer", alias: "Keywire", img: "img/keywire.png", description: "Ensuring financial stability and strategic investment for growth.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Arraf Hoque", title: "Pergallong", alias: "CptnHawkeye", img: "img/hawkeye.png", description: "Strategizing long-term sustainability and operations.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Silas LastName", title: "Human Resources Manager", alias: "HR Lead", img: "img/hr.png", description: "Fostering company culture and team development.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Dylan Lastname", title: "Business Attorney", alias: "Flueve", img: "img/flueve.png", description: "Providing legal counsel and ensuring compliance.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Noah Lastname", title: "General Manager", alias: "Hamalak", img: "img/hamalak.png", description: "Overseeing daily business operations.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Noah Dingey", title: "Investor", alias: "Sayo", img: "img/sayo.png", description: "Supporting company growth through strategic investments.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Alexander Holt Whysall", title: "Intern", alias: "Beef", img: "img/beef.png", description: "Learning and supporting multiple departments.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Max Poutot", title: "Office Cat", alias: "Argo", img: "img/argo.png", description: "Keeping morale high and enforcing break times.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Stephen Justice McQuaig", title: "Pissing Me Off", alias: "SonicPikachu", img: "img/sonic.png", description: "Causing problems, but also solutions.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Leona Lastname", title: "Chief Technology Officer", alias: "Lilou", img: "img/leona.png", description: "Leading technology and infrastructure.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Edson Byrd", title: "Gooner", alias: "Cookies", img: "img/cookies.png", description: "Unclear, but essential.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Llen Yang", title: "Diversity, Equity & Inclusion", alias: "L.1en", img: "img/llen.png", description: "Ensuring inclusivity and equity within the company.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } },
    { name: "Jorge", title: "Developer", alias: "AhamUWU", img: "img/aham.png", description: "Developing innovative software solutions.", socials: { twitter: "img/twitter-icon.png", linkedin: "img/linkedin-icon.png" } }
];

let currentIndex = 0;
function updateTeamMember() {
    const memberImage = document.getElementById("member-image");
    const memberName = document.getElementById("member-name");
    const memberTitle = document.getElementById("member-title");
    const memberAlias = document.getElementById("member-alias");
    const memberDescription = document.getElementById("member-description");
    const socialTwitter = document.getElementById("social-twitter");
    const socialLinkedIn = document.getElementById("social-linkedin");
    const teamMemberDiv = document.getElementById("team-member");
    
    teamMemberDiv.classList.add("fade-out");
    setTimeout(() => {
        memberImage.src = teamMembers[currentIndex].img;
        memberName.textContent = teamMembers[currentIndex].name;
        memberTitle.textContent = teamMembers[currentIndex].title;
        memberAlias.textContent = teamMembers[currentIndex].alias;
        memberDescription.textContent = teamMembers[currentIndex].description;
        socialTwitter.href = teamMembers[currentIndex].socials.twitter;
        socialLinkedIn.href = teamMembers[currentIndex].socials.linkedin;
        
        teamMemberDiv.classList.remove("fade-out");
        teamMemberDiv.classList.add("fade-in");
    }, 500);
}

document.getElementById("next-btn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % teamMembers.length;
    updateTeamMember();
});

document.getElementById("prev-btn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    updateTeamMember();
});

document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById("intro-section");
    function fadeInOnScroll() {
        const sectionTop = introSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            introSection.classList.add("intro-visible");
        }
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

// Contact Form Submission (Only for pages with contact form)
if (document.getElementById("contactForm")) {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }
        
        let recipientEmail = "info@mikucord.llc"; // Replace this with your actual email
        let subject = "New Contact Form Submission";
        let body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}