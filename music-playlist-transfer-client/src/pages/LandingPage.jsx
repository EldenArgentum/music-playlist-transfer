import SpotifyAuth from "../components/SpotifyAuth"
import SpotifySection from "../components/SpotifySection"

const LandingPage = () => {
	const code = new URLSearchParams(document.location.search).get("code") // use session storage instead

	return <div>{code ? <SpotifySection code={code} /> : <SpotifyAuth />}</div>
}

export default LandingPage
