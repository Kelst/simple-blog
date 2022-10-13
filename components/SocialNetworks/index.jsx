import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from "../ScreenEgg"
import { AiFillYoutube, AiOutlineGithub, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
const socialNetworks = [
	{ id: 1, href: 'https://github.com/Kelst/', icon: AiOutlineGithub },
	{ id: 2, href: 'https://www.youtube.com', icon: AiFillYoutube },
	{ id: 3, href: 'https://twitter.com/VBezkorovainij', icon: AiFillTwitterCircle },
	{ id: 4, href: 'https://www.instagram.com/bezkorovainij/', icon: AiOutlineInstagram }
];
export default function SocialNetworks({ className }) {
	return (
		<ScreenEgg type="left">
			<ul className={cl(className, styles.list)}>
				{socialNetworks.map((social) => {
					return (
						<li key={social.id} className={styles.listItem}>
							<a href={social.href} target="blank" className={styles.listLink}>
								{React.createElement(social.icon, {
									color: 'black',
									size: 50
								})}
							</a>
						</li>
					);
				})}
			</ul>
		</ScreenEgg>
	);
}
