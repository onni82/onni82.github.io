import { FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaPhp, FaRust, FaSwift, FaCuttlefish, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiCplusplus, SiGo, SiKotlin, SiRuby, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import type { FC } from "react";

const languageIcons: Record<string, FC> = {
	JavaScript: () => <FaJs className="lang-icon js" />,
	Python: () => <FaPython className="lang-icon python" />,
	Java: () => <FaJava className="lang-icon java" />,
	React: () => <FaReact className="lang-icon react" />,
	NodeJS: () => <FaNodeJs className="lang-icon node" />,
	PHP: () => <FaPhp className="lang-icon php" />,
	Rust: () => <FaRust className="lang-icon rust" />,
	Swift: () => <FaSwift className="lang-icon swift" />,
	C: () => <FaCuttlefish className="lang-icon c" />,
	"C#": () => <TbBrandCSharp className="lang-icon csharp" />,
	"C++": () => <SiCplusplus className="lang-icon cpp" />,
	Go: () => <SiGo className="lang-icon go" />,
	Kotlin: () => <SiKotlin className="lang-icon kotlin" />,
	Ruby: () => <SiRuby className="lang-icon ruby" />,
	TypeScript: () => <SiTypescript className="lang-icon ts" />,
	HTML: () => <FaHtml5 className="lang-icon html" />,
	CSS: () => <FaCss3 className="lang-icon css" />,
};

export default languageIcons;
