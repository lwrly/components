import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lwrly-footer',
  template: `
<footer class="footer">
  <div class="container-fluid footer-top">
    <br><br>
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="row">
            <div class="col footer-title">
              LWR.ly
            </div>
            <div class="col footer-title">
              Development
            </div>
            <div class="col footer-title">
              Resources
            </div>
          </div>
          <div class="row footer-links">
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/privacy">Privacy Policy</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/status">Status</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/languages">Languages</a></div>
          </div>
          <div class="row footer-links">
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/contact">Contact</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/api/">API</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://blog.letsworkremote.ly">Blog</a></div>
          </div>
            <div class="row footer-links">
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/terms">Terms and Conditions</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://m.letsworkremote.ly">Mobile</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/faq">FAQ</a></div>
          </div>
          <div class="row footer-links">
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/cookie-policy">Cookie Policy</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/bugs">Report Bug</a></div>
            <div class="col"><a class="text-decoration-none text-dark" href="https://letsworkremote.ly/help">Help</a></div>
          </div>
        </div>
        <div class="col-lg-3 border-left blw-1">
          <div class="row pb-4">
            <div class="col text-right">
              <a class="btn btn-sm btn-outline-secondary text-decoration-none text-dark border-0 m-1 p-1" href="https://github.com/lwrly" target="_blank">
                <i class="fab fa-lg fa-github"></i>
              </a>
              <a class="btn btn-sm btn-outline-secondary text-decoration-none text-dark border-0 m-1 p-1" href="https://www.linkedin.com/company/letsworkremote-ly" target="_blank">
                <i class="fab fa-lg fa-linkedin"></i>
              </a>
              <a class="btn btn-sm btn-outline-secondary text-decoration-none text-dark border-0 m-1 p-1" href="https://www.facebook.com/lwrly" target="_blank">
                <i class="fab fa-lg fa-facebook"></i>
              </a>
              <a class="btn btn-sm btn-outline-secondary text-decoration-none text-dark border-0 m-1 p-1" href="https://www.twitter.com/lwrly" target="_blank">
                <i class="fab fa-lg fa-twitter"></i>
              </a>
              <a class="btn btn-sm btn-outline-secondary text-decoration-none text-dark border-0 m-1 p-1" href="https://letsworkremote.ly/rss">
                <i class="fas fa-lg fa-rss"></i>
              </a>
            </div>
          </div>
          <div class="row py-2">
            <div class="col text-right">
              <h5>Let'sWorkRemote.ly</h5>
              <img src="https://letsworkremote.ly/assets/lwrly-logo-transparent.png" alt="Let's Work Remotely">
              <span class="copyright pl-2">Copyright &copy; 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
  </div>
  <div class="container-fluid footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col py-2">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</footer>
  `,
  styles: [`
.footer-top {
  background-color: lightgray;
}

.footer-bottom {
  font-size: 10px;
}

.footer-title {
  font-weight: bold;
}

.footer-links {
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 12px;
  text-decoration: none;
}

.copyright {
  font-weight: normal;
}

.company-logo {
  max-width: 128px;
  max-height: 128px;
  min-width: 128px;
  vertical-align: middle;
}

.border-dashed {
  border-color: inherit;
  border-style: dashed;
}

.border-dotted {
  border-color: inherit;
  border-style: dotted;
}

.border-gray {
  border-color: gray;
}

.border-lightgray {
  border-color: lightgray;
}

.border-darkgray {
  border-color: darkgray;
}

.blw-1 {
  border-left: 3px solid white !important;
}

.bw-1 {
  border-width: 1px;
}

.bw-2 {
  border-width: 2px;
}

.bw-3 {
  border-width: 3px;
}

.bw-4 {
  border-width: 4px;
}

.bw-5 {
  border-width: 5px;
}

#ad-plug {
  border-color: lightgray;
}
  `]
})
export class SiteFooterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
