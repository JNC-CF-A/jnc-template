import React from "react";
{/*import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Facebook from "../assets/Facebook-alt.svg";*/}
import config from "../lib/config";
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react'

export function SocialList({}) {
  return (
    <div className="social-links">
      <a
        title="Facebook"
        href={`https://facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width={24} height={24} fill="currentColor" />
      </a>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram width={24} height={24} fill="currentColor" />
      </a>

      <a
        title="LinkedIn"
        href={`https://linkedin.com/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={24} height={24} fill="currentColor" />
      </a>


      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill="currentColor" />
      </a>
      
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <Github width={24} height={24} fill="currentColor" />
      </a>
      <style jsx>{`
        .social-links a {
          display: inline-block;
          color: #ecf0f1;
        }
        .social-links a:not(:last-child) {
          margin-right: 2em;
        }
        .social-links a:hover {
          color: #d35400;
        }
        .social-links svg {
          fill: currentColor;
        }
      `}</style>
    </div>
  );
}
