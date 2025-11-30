export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl text-primary mb-2">Sitembile Ncube-Kaseka</h3>
            <p className="text-muted-foreground">Mining Engineer | Lecturer | STEM Advocate</p>
            <p className="text-sm text-muted-foreground mt-2">MSc-BEng | Mandela Washington Alumnus</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contact@sitembile.com" className="hover:text-primary transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sitembile-ncube-kaseka" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LauncHER Engineers Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sitembile Ncube-Kaseka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
