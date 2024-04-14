import React from "react";

function Footer() {
  return (
   
    <footer class="footer">
    <div class="container ">
            <div class="reachout">
                {/* <img src="https://elcom.digital/wp-content/themes/tally/assets/images/tp-aws-footerlogo.svg" alt="Tally Solutions Accounting Software" class="img-fluid mb-2 d-none"/> */}
				<p class="footer-title mt-4">Reach out to us</p>
				<p class="mt-4">
				<a class="email-link" href="mailto:info@elcom.digital" target="_top">info@elcom.digital</a>
				</p>
    </div>
       
        <div class="aboutus">
            <div class="footer-links">
                <p class="footer-title">About Us</p>
				<p class="mt-3 pr-5">Founded in 1993, Elcom is one of the leading IT distributors in India. <a href="https://solutions.elcom.digital/">Elcom Digital</a>, a software subdivision of the company, aims to provide IT and cloud software services and to carry on the business of software distribution globally.</p>
            </div>
        </div>

        <div class="links">
            <div class="footer-links">
                <p class="footer-title">Links</p>
                <ul class="navbar-nav">
				
					<li class="nav-item">
                        <a class="nav-link" href="/help/">Help</a>
                    </li>
					<li class="nav-item">
                        <a class="nav-link" href="https://solutions.elcom.digital/">Other Digital Solutions</a>
                    </li>
					 <li class="nav-item">
                        <a class="nav-link" href="/request-call/">Get a Call Back</a>
                    </li>
					 <li class="nav-item">
                        <a class="nav-link" href="https://manage.elcom.digital/worksuite/public/careers/0f98ad5470ebee33f1120e106563fd45">Career</a>
                    </li>
			
                </ul>
            </div>
        </div>

      
   

  

</div></footer>
  );
}

export default Footer;