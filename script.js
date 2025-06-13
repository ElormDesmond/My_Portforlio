// Sample projects data - Replace with your actual projects


// Function to create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Terminal typing effect
function typeWriter(text, element, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(text, element, index + 1), 100);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});