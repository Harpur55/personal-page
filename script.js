
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});


const projects = [
    {
        "image": "asset/image/weshop.png",
        "name": "WeShope",
        "description": "E-commerce toko online sederhana dengan fitur keranjang belanja, pembayaran, dan filtering daerah pengiriman.",
        "technology": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        "github": "https://github.com/Harpur55/weshop"
    },
    {
        "image": "asset/image/logo.jpg",
        "name": "Todo List",
        "description": "Aplikasi todo list dengan fitur CRUD. yang dapat menambah, menghapus, dan mengedit todo. yang telah di buat",
        "technology": ["HTML", "CSS", "JavaScript"],
        "github": "https://github.com/Harpur55/weshop"
    },
    {
        "image": "asset/image/logo.jpg",
        "name": "Dashboard Admin E-Commerce",
        "description": "Dashboard admin untuk mengelola data produk, data user, dan data transaksi.",
        "technology": ["HTML", "CSS", "JavaScript,Codeigniter"],
        "github": "https://github.com/Harpur55/weshop"
    },
    {
        "image": "asset/image/landing-page.PNG",
        "name": "Landing Page Yoi (Yeekhan Original Indonesia)",
        "description": "Landing page single page perusahaan. yang bergerak dalam bidang marketplace produk lokal.",
        "technology": ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
        "github": "https://github.com/Harpur55/weshop"
    },
    {
        "image":"asset/image/logo.jpg",
        "name": "CMS Admin Landing Page Sacti Taekwondo Win-Hunter",
        "description": "Mengelola data siswa dan manajemen club Taekwondo Win-Hunter.",
        "technology": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Go"],
        "github": "https://github.com/Harpur55/weshop"
    },
{
"image": "asset/image/logo.jpg",
"name": "CMS Admin Landing Page Sacti Taekwondo Win-Hunter",
"description": "Mengelola data siswa dan manajemen club Taekwondo Win-Hunter.",
"technology": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Go"]
},


];

function renderProjects() {
    const container = document.getElementById("porto-container");
    container.innerHTML = ""; // Kosongkan sebelum render

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card-2");

        card.innerHTML = `
            <div class="image-card">
                 <img src="${project.image}" alt="${project.name}">
                  <h3>${project.name}</h3>
                   <p>${project.description}</p>
                   <strong>Teknologi:</strong> ${project.technology.join(", ")} <br>
                   <a href="${project.github}" style="text-decoration: none; ">link project</a>
            </div>   
            
               
           
            
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProjects);


var typed = new Typed('.auto-type', {
    strings: ["Hari Purnomo"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
