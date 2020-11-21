import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Preact 10 + FontAwesome + SCSS</h1>
		<nav>
			<Link activeClassName={style.active} href="/"><FontAwesomeIcon icon="home"/> Home</Link>
			<Link activeClassName={style.active} href="/profile"><FontAwesomeIcon icon="id-badge"/> Me</Link>
			<Link activeClassName={style.active} href="/profile/jsmith"><FontAwesomeIcon icon="id-badge"/> jsmith</Link>
		</nav>
	</header>
);

export default Header;
