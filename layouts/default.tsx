import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import footerStyles from "../styles/Footer.module.css";

import { metas, contacts } from "../src/config";

type Props = {
	children?: React.ReactNode;
};

interface Icon {
	href: string;
	faClass: string;
}

const icons: Icon[] = [
	{ href: contacts.fb, faClass: "fa fa-facebook" },
	{ href: contacts.vk, faClass: "fa fa-vk" },
	{ href: contacts.wa, faClass: "fa fa-whatsapp" },
	{ href: contacts.instagram, faClass: "fa fa-instagram" },
	{ href: contacts.tg, faClass: "fa fa-telegram" },
	{ href: contacts.email, faClass: "fa fa-envelope" },
];

const Default: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<Head>
				<title>{metas.title}</title>
				<meta name="description" content={metas.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>{children}</main>

			<footer
				style={{
					width: "100%",
					textAlign: "center",
					padding: "30px 0",
					background: "#222",
					color: "#fff",
					position: "relative",
				}}
			>
				<h4
					style={{
						marginBottom: "05px",
						marginTop: "20px",
						fontWeight: "600",
					}}
				>
					Kislyakov
				</h4>

				<p>
					<i className="fa fa-copyright"></i> Александр Кисляков
					<br></br>
					г.Москва
				</p>
				<div className="icons">
					{icons.map((icon) => (
						<a
							href={icon.href}
							style={{
								color: "#fff",
								margin: "0 13px",
								cursor: "pointer",
								padding: "19px 0",
								fontSize: "15px",
							}}
							key={icon.href}
						>
							<i className={icon.faClass}></i>
						</a>
					))}
				</div>
			</footer>
		</div>
	);
};

export default Default;
