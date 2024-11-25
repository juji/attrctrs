import Thumbnail from "../thumbnail";
import './index.css'


const data = [
	{
		id:"lorenz",
		href: "/p/lorenz",
		label: "Lorenz Attractor",
		imageSmall: "/images/lorenz-600.webp",
		imageMedium: "/images/lorenz.webp",
		imageLarge: "/images/lorenz.png",
		name: "Lorenz",
	},
	{
		id:"aizawa",
		href: "/p/aizawa",
		label: "Aizawa Attractor",
		imageSmall: "/images/aizawa-600.webp",
		imageMedium: "/images/aizawa.webp",
		imageLarge: "/images/aizawa.png",
		name: "Aizawa",
	},
	{
		id:"burke-shaw",
		href: "/p/burke-shaw",
		label: "Burke-Shaw Attractor",
		imageSmall: "/images/burke-shaw-600.webp",
		imageMedium: "/images/burke-shaw.webp",
		imageLarge: "/images/burke-shaw.png",
		name: "Burke-Shaw",
	},
	{
		id:"chen-lee",
		href: "/p/chen-lee",
		label: "Chen-Lee Attractor",
		imageSmall: "/images/chen-lee-600.webp",
		imageMedium: "/images/chen-lee.webp",
		imageLarge: "/images/chen-lee.png",
		name: "Chen-Lee",
	},
	{
		id:"thomas",
		href: "/p/thomas",
		label: "Thomas Attractor",
		imageSmall: "/images/thomas-600.webp",
		imageMedium: "/images/thomas.webp",
		imageLarge: "/images/thomas.png",
		name: "Thomas",
	},
	{
		id:"halvorsen",
		href: "/p/halvorsen",
		label: "Halvorsen Attractor",
		imageSmall: "/images/halvorsen-600.webp",
		imageMedium: "/images/halvorsen.webp",
		imageLarge: "/images/halvorsen.png",
		name: "Halvorsen",
	},
	{
		id:"tsucs",
		href: "/p/tsucs",
		label: "TSUCS Attractor",
		imageSmall: "/images/tsucs-600.webp",
		imageMedium: "/images/tsucs.webp",
		imageLarge: "/images/tsucs.png",
		name: "TSUCS 1",
	},
	{
		id:"rayleigh-benard",
		href: "/p/rayleigh-benard",
		label: "Rayleigh-Benard Attractor",
		imageSmall: "/images/rayleigh-benard-600.webp",
		imageMedium: "/images/rayleigh-benard.webp",
		imageLarge: "/images/rayleigh-benard.png",
		name: "Rayleigh-Benard",
	},
	{
		id:"wang-sun",
		href: "/p/wang-sun",
		label: "Wang-Sun Attractor",
		imageSmall: "/images/wang-sun-600.webp",
		imageMedium: "/images/wang-sun.webp",
		imageLarge: "/images/wang-sun.png",
		name: "Wang-Sun",
	},
	{
		id:"clifford",
		href: "/p/clifford",
		label: "Clifford Attractor",
		imageSmall: "/images/clifford-600.webp",
		imageMedium: "/images/clifford.webp",
		imageLarge: "/images/clifford.png",
		name: "Clifford",
	},
	{
		id:"svensson",
		href: "/p/svensson",
		label: "Svensson Attractor",
		imageSmall: "/images/svensson-600.webp",
		imageMedium: "/images/svensson.webp",
		imageLarge: "/images/svensson.png",
		name: "Svensson",
	},
	{
		id:"tinkerbell",
		href: "/p/tinkerbell",
		label: "Tinkerbell Attractor",
		imageSmall: "/images/tinkerbell-600.webp",
		imageMedium: "/images/tinkerbell.webp",
		imageLarge: "/images/tinkerbell.png",
		name: "Tinkerbell",
	},
];


export function Attractors (){
	return <main>{data.map((d,i) => {
		return <Thumbnail {...d} animDelay={i} key={`thumb_${d.id}`} />
	})}</main>
}