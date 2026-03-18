import { SocialLinksData } from "@/data/components/SocialLinksData";

export default function SocialLinks() {
  return (
    <nav aria-label="Social Media Links">
      <ul className="social-links">
        {SocialLinksData.map((social) => (
          <li className="social-link" key={social.name}>
            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a>
          </li>
        ))}
      </ul>
    </nav>
  );
}