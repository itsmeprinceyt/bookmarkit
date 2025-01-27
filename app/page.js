import { BorderBeam } from ".//(components)/magicui/border-beam.jsx";
import Image from "next/image.js";
import Link from "next/link.js";

export default function Main() {
  const Websites = [
    {
      title: "Sofi Bump",
      src: "/static/images/sofi.jpeg",
      image_alt: "Sofi",
      link: "https://sofi.gg/bump"
    },
    {
      title: "Sofi",
      src: "/static/images/sofi.jpeg",
      image_alt: "Sofi",
      link: "https://top.gg/bot/853629533855809596/vote"
    },
    {
      title: "Karuta",
      src: "/static/images/karuta.png",
      image_alt: "Sofi",
      link: "https://top.gg/bot/646937666251915264/vote"
    },
    {
      title: "Coins",
      src: "/static/images/bot-discord-image.png",
      image_alt: "Sofi",
      link: "https://bot-hosting.net/panel/earn"
    },
    {
      title: "Genshin Impact",
      src: "/static/images/gi2.jpg",
      image_alt: "Sofi",
      link: "https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481"
    },
    {
      title: "Honkai Star Rail",
      src: "/static/images/hsr.png",
      image_alt: "Sofi",
      link: "https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311"
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="mt-12 mb-12 relative  bg-black rounded-xl text-white flex flex-col justify-start items-center gap-5 p-5 shadow-xl shadow-white/20 ">
        <h1 className="font-semibold ">Bookmark Shortcuts</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
          {Websites.map((website, index) => (
            <div
              key={index}
              className="bg-white flex justify-around items-center gap-5 text-black rounded-xl p-4 w-[250px] h-[130px]"
            >
              <Image
                className="w-[100px] rounded-xl shadow-xl shadow-black/30"
                src={website.src}
                width={200}
                height={200}
                alt={website.image_alt}
              />
              <Link href={website.link} target="_blank">
                <button className="bg-gradient-to-r from-black to-black/80 text-white text-xs p-3 rounded-xl shadow-xl shadow-black/30 hover:scale-105 transition-all ease-in-out w-[90px]">{website.title}</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-[10px]">
        Made by @itsmeprinceyt | &nbsp;
        <Link className="hover:animate-pulse transition-all ease-in-out" href="https://github.com/itsmeprinceyt" target="_blank">
        Github
        </Link>
        &nbsp; | &nbsp;
        <Link className="hover:animate-pulse transition-all ease-in-out" href="https://www.youtube.com/@itsmeprinceyt" target="_blank">
        YouTube
        </Link>

        
        </div>
        <BorderBeam />
      </div>
    </div>
  );
}
