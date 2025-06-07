import React from "react";
{/*import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Facebook from "../assets/Facebook-alt.svg";*/}
import config from "../lib/config";
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react'

export function SocialList({}) {
  return (
    <div>
      <a
        title="Facebook"
        href={`https://facebook.com/$(config.facebook_account}`}
        className="hover:text-accent-terra transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Instagram"
        href={}
        className="hover:text-accent-terra transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Instagram  width={24} height={24} fill={"#222"} />
      </a>

      <a
        title="LinkedIn"
        href={`https://linkedin.com/${config.linkedin_account}`}
        target="_blank"
        rel="noopener"
      >
        <Linkedin width={24} height={24} fill={"#222"} />
      </a>


      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <Github width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
