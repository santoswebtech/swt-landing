
function toggleNav() {
    let x = document.querySelector('#navToggle>i');
    let y = document.querySelector('#mobileNav');
    if (x.className === 'fa fa-bars') {
        x.className = 'fa-regular fa-x';
        y.style.display = 'block';
    } else {
        x.className = 'fa fa-bars';
        y.style.display = 'none';
    }
}

function openModal(e) {
    let btnTitle = e.innerHTML;
    let modal = document.querySelector('#serviceModal');
    let p = document.querySelector('#serviceModal>p');
    let h = document.querySelector('#serviceModal>h2');
    let appText = 'Are you looking to bring your business into the digital age? With our top-tier web and mobile app development services, we can turn your vision into a reality. Imagine reaching your customers wherever they are with seamless, user-friendly experiences tailored specifically to your brand. Whether you\'re a startup looking to make your mark or an established business aiming to stay ahead of the curve, Santos Web Technologies is here to make it happen. Let\'s elevate your online presence and drive growth together. Get in touch today to unlock the full potential of your business!';
    let webText = 'Ready to make a lasting impression online? Our website development services are your gateway to a captivating digital presence. We craft stunning websites that not only look incredible but also function flawlessly across all devices. From sleek and modern designs to user-friendly interfaces, we tailor every aspect to reflect your brand\'s unique identity and engage your audience effectively. Whether you\'re launching a new venture or revamping your current site, Santos Web Technologies is dedicated to bringing your vision to life. Let\'s create something extraordinary together. Reach out today to take your online presence to the next level!';
    let maintenanceText = 'Is your website receiving the care it deserves? With our website maintenance services, you can ensure your online presence remains top-notch, without the hassle. From routine content management to bug fixes, we\'ve got you covered. Santos Web Technologies will keep your site running smoothly, so you can focus on what matters most – growing your business. Don\'t let outdated content or technical issues hold you back. Let us handle the maintenance, while you reap the benefits of a consistently polished and professional website. Elevate your online presence today with our reliable maintenance solutions. Get in touch to learn more!';
    let stylingText = 'Ready to stand out from the crowd? Our custom website styling services are your ticket to a truly unique online presence. Say goodbye to cookie-cutter designs and hello to a website that reflects your brand\'s personality and vision. Whether you\'re aiming for sleek sophistication or bold creativity, our expert team will work closely with you to bring your ideas to life. From custom layouts to tailored color schemes and unique typography, we\'ll ensure every detail aligns perfectly with your brand identity. Don\'t settle for ordinary – let us elevate your website with bespoke styling that sets you apart. Get in touch today to transform your online presence into something extraordinary!';
    let functionalityText = 'Ready to unlock the full potential of your website? Our custom website functionality services are here to turn your ideas into reality. Whether you\'re looking to streamline processes, enhance user experience, or add innovative features, our expert developers have the skills and creativity to bring your vision to life. From complex solutions to interactive elements and personalized user journeys, we\'ll tailor every aspect to meet your specific needs and goals. Don\'t settle for off-the-shelf solutions – let us build the features that make your business unique. Elevate your online presence and stay ahead of the competition with our custom functionality development. Get in touch today to explore the possibilities!';
    let embedText = 'Ready to supercharge your website with seamless third-party integrations? Our custom integration services are your key to unlocking a world of possibilities. Whether you\'re looking to connect with social platforms, embedded media, marketing tools, or any other third-party services, Santos Web Technologies has the expertise to make it happen. Say goodbye to manual data entry and hello to automated processes that save you time and streamline your operations. With tailored integrations that fit your specific needs, we\'ll ensure your website works seamlessly with the tools you rely on most. Don\'t let integration challenges hold you back – let us empower your website to reach its full potential. Get in touch today to discover how we can elevate your online presence with custom third-party integrations!';
    let seoText = 'Ready to boost your online visibility and drive more traffic to your website? Our website SEO services are your secret weapon for climbing the search engine rankings. With our expert team by your side, we\'ll conduct a comprehensive audit of your website, identify key opportunities for optimization, and develop a tailored SEO strategy that gets results. From keyword research and on-page optimization to technical SEO and content creation, we\'ll fine-tune every aspect of your website to ensure it\'s primed for success. Don\'t miss out on valuable opportunities – let us maximize your online presence and supercharge your growth. Get in touch today to take your SEO game to the next level!';
    let a11yText = 'Ready to make your website accessible to everyone? Our website accessibility services are your key to inclusivity and compliance with accessibility standards. With our expert team, we\'ll ensure your website is user-friendly for individuals of all abilities, including those with disabilities. From implementing screen reader compatibility to optimizing navigation and ensuring color contrast meets WCAG guidelines, we\'ll tailor every aspect to ensure seamless accessibility. Don\'t miss out on reaching a wider audience – with our custom accessibility services, you\'ll demonstrate your commitment to inclusion while enhancing user experience for all. Let us help you create a website that\'s accessible to everyone. Get in touch today to learn more about our custom accessibility solutions!';
    let dataText = 'Ready to harness the power of data? Our website data integration services are your ticket to unlocking valuable insights and driving smarter decision-making. Whether you\'re looking to consolidate data from multiple sources, automate data syncing processes, or build custom dashboards for real-time analytics, Santos Web Technologies has the expertise to make it happen. Say goodbye to siloed data and hello to a unified view of your business – with our custom data integration services, you\'ll have the tools you need to optimize performance, personalize user experiences, and drive growth. Don\'t let valuable data go to waste – let us help you harness its full potential. Get in touch today to explore how our custom data integration solutions can revolutionize your website!';

    h.innerHTML = btnTitle

    if (btnTitle === 'App Development') {
        p.innerHTML = appText;
    }

    if (btnTitle === 'Website Development') {
        p.innerHTML = webText;
    }

    if (btnTitle === 'Website Maintenance') {
        p.innerHTML = maintenanceText;
    }

    if (btnTitle === 'Custom Styling') {
        p.innerHTML = stylingText;
    }

    if (btnTitle === 'Custom Functionality') {
        p.innerHTML = functionalityText;
    }

    if (btnTitle === 'Embedded Services') {
        p.innerHTML = embedText;
    }

    if (btnTitle === 'Accessibility') {
        p.innerHTML = a11yText;
    }

    if (btnTitle === 'SEO') {
        p.innerHTML = seoText;
    }

    if (btnTitle === 'Data Integration') {
        p.innerHTML = dataText;
    }

    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}
function openConsult() {
    let modal = document.getElementById('consultModal');
    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}
function allowModalClose() {
    let modal = document.getElementById('consultModal');
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}
function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}
function closeConsult() {
    document.getElementById('consultModal').style.display = 'none';
}

window.onscroll = function() {
    showTopJumpLink()
}

function showTopJumpLink() {
    let serviceAtTop = document.getElementById('services').getBoundingClientRect().top < 600;
    if(serviceAtTop === true) {
        document.getElementById('topJumpLink').style.display = 'block';
    } else {
        document.getElementById('topJumpLink').style.display = 'none';
    }
}

function openPrivacy() {
    let modal = document.getElementById('privacyModal');
    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}
function openDemo() {
    let modal = document.getElementById('demoModal');
    modal.style.display = 'flex';
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          modal.style.display = 'none'
        }
    })
}