import Link from "next/link";
import { FaFacebook } from "react-icons/fa"
import { TiSocialYoutubeCircular } from "react-icons/ti";

interface MediaProps  {
    slug:string;
    icon: React.ReactNode;
    url: string;

}
const SocailMedias: MediaProps[] = [
    {
        slug: "facebook",
        icon: <FaFacebook  size="20" color="#004b8c" />,
        url: "https://www.facebook.com/bostonlanka/"
    },
    {
        slug: "youtube",
        icon: <TiSocialYoutubeCircular  size="25" className="text-site-red" />,
        url: "https://www.youtube.com/user/Bostonlanka/"
    }
];
const SocailMedia = () => {
  return (
    <div className="flex gap-1 items-center">
           {SocailMedias.map((media:MediaProps)=> (
                <Link key={media.slug} href={media.url} aria-label={`${media.slug} view link`} target="_blank">{media.icon}</Link>
           ))} 
        
    </div>

  )
}

export default SocailMedia