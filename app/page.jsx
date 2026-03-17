"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import { BorderBeam } from ".//(components)/magicui/border-beam.jsx";
import { Websites } from '../utils/websites.js';
import { Settings, X, Save } from "lucide-react";
import { useState, useEffect } from "react";

export default function Main() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toggleMap, setToggleMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("websiteToggles");
    if (saved) {
      setToggleMap(JSON.parse(saved));
    } else {
      const defaults = {};
      Websites.forEach((_, i) => { defaults[i] = true; });
      setToggleMap(defaults);
    }
    setIsLoading(false);
  }, []);

  const handleToggle = (index) => {
    setToggleMap(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSave = () => {
    localStorage.setItem("websiteToggles", JSON.stringify(toggleMap));
    setSettingsOpen(false);
    window.location.reload();
  };

  const visibleWebsites = Websites.filter((_, i) => toggleMap[i] !== false);

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="mt-12 mb-12 relative bg-black rounded-xl text-white flex flex-col justify-start items-center gap-5 p-5 shadow-xl shadow-white/20">

        {/* Settings Icon */}
        <button
          onClick={() => setSettingsOpen(true)}
          className="absolute top-4 right-4 text-white/60 hover:text-white hover:rotate-45 transition-all ease-in-out duration-300 z-10"
          title="Settings"
        >
          <Settings size={20} />
        </button>

        <h1 className="font-semibold">Bookmark Shortcuts</h1>

        {isLoading ? (
          <div className="flex flex-col justify-center items-center gap-3 py-10 px-16">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="text-white/40 text-xs">Loading bookmarks...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
            {visibleWebsites.map((website, index) => (
              <div
                key={index}
                className="bg-white flex justify-around items-center gap-5 text-black rounded-xl p-4 w-[250px] h-[130px]"
              >
                <Image
                  unoptimized={["Sofi Bump", "Sofi", "Index"].includes(website.title)}
                  className="w-[100px] rounded-xl shadow-xl shadow-black/30"
                  src={website.src}
                  width={200}
                  height={200}
                  alt={website.image_alt}
                  loading="lazy"
                />
                <Link href={website.link} target="_blank">
                  <button className="bg-gradient-to-r from-black to-black/80 text-white text-xs p-3 rounded-xl shadow-xl shadow-black/30 hover:scale-105 transition-all ease-in-out w-[90px]">
                    {website.title}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

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

      {/* Settings Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-black/95 border border-white/10 rounded-2xl p-6 w-[340px] max-h-[80vh] flex flex-col gap-4 shadow-2xl shadow-black/60">

            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold text-sm tracking-wide">Toggle Bookmarks</h2>
              <button
                onClick={() => setSettingsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Toggle List */}
            <div className="flex flex-col gap-2 overflow-y-auto pr-1">
              {Websites.map((website, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white/5 hover:bg-white/10 rounded-xl px-4 py-3 transition-colors"
                >
                  <span className="text-white text-xs">{website.title}</span>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                      toggleMap[index] !== false ? "bg-green-500" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                        toggleMap[index] !== false ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 bg-white text-black text-xs font-semibold py-2.5 rounded-xl hover:bg-white/90 hover:scale-[1.02] transition-all ease-in-out shadow-lg shadow-white/10 mt-1"
            >
              <Save size={14} />
              Save & Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}