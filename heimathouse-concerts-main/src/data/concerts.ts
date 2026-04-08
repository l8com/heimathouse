import concert16012026 from '../assets/images/concert16012026.jpg';
import concert20032026 from '../assets/images/concert20032026.jpg';
import concert17042026 from '../assets/images/concert17042026.jpg';
import band2_1 from '../assets/images/band2_1.jpg';
import band2_2 from '../assets/images/band2_2.jpg';

export type Concert = {
	slug: string;
	title: string;
	date: string;
	bandName: string;
	description: string;
	content: string[];
	posterImage: string;
	bookingUrl?: string;
};

export const concerts: Concert[] = [
	{
		slug: 'winter-session-16012026',
		title: 'Winter Session',
		date: '2026-01-16T20:00:00+01:00',
		bandName: 'Mellow House Trio',
		description: 'Ein ruhiger Abend mit reduzierten Arrangements, klaren Melodien und viel Nähe zum Publikum.',
		content: [
			'Ein intimer Jahresauftakt mit sanftem Indie-Folk, warmen Stimmen und einem sehr nahen, konzentrierten Raumgefühl.',
			'Die Besetzung bleibt klein, der Klang offen und die Atmosphäre bewusst zurückgenommen – genau richtig für einen Winterabend im Haus.',
		],
		posterImage: concert16012026.src,
	},
	{
		slug: 'band-night-1-14022026',
		title: 'Band Night I',
		date: '2026-02-14T20:00:00+01:00',
		bandName: 'Band 2',
		description: 'Kleiner Clubabend mit dichter Stimmung und einem direkten, fast dokumentarischen Bühnengefühl.',
		content: [
			'Temporary entry: the source image shows only the visual poster, so this event keeps a neutral working title until the real act name is confirmed.',
			'Der Abend funktioniert als kompakter Kulturtermin mit wenig Distanz zwischen Bühne und Publikum – genau passend für das Heimathouse.',
		],
		posterImage: band2_1.src,
	},
	{
		slug: 'march-house-show-20032026',
		title: 'March House Show',
		date: '2026-03-20T20:00:00+01:00',
		bandName: 'Cedar & Bloom',
		description: 'Ein warmer Frühjahrsabend mit akustischer Präsenz, leichten Harmonien und ruhigem Puls.',
		content: [
			'Das Konzert setzt auf feine Gitarren, viel Luft zwischen den Arrangements und einen konzentrierten, persönlichen Ton.',
			'Die Stimmung bleibt nahbar und unaufgeregt – wie ein sorgfältig kuratiertes Programmheft, das man gerne mit nach Hause nimmt.',
		],
		posterImage: concert20032026.src,
	},
	{
		slug: 'the-jules-band-17042026',
		title: 'The Jules Band',
		date: '2026-04-17T20:00:00+02:00',
		bandName: 'The Jules Band',
		description: 'Soul trifft auf Blues und R&B – ein intimer Konzertabend mit The Jules Band im Heimathaus Ahlers.',
		content: [
			'HeimatHouse Concerts präsentiert: The Jules Band is back! Die Band vereint filigrane Arrangements, unbändige Spielfreude und echte Herzlichkeit auf einer Bühne, die ganz nah am Publikum bleibt.',
			'Frontfrau Julia „Jules“ Fischer verbindet alten Stil mit modernem Sound. Soul vermischt sich mit Blues und R&B – alles aus eigener Feder und mit spürbarer Live-Energie.',
			'Heimathaus „Ahlers“, Werninghoker Str. 5, 48493 Wettringen · 17.04.2026 · 20:00 Uhr · Einlass ab 19:00 Uhr. Special Guest: John McKoy. The Jules Band Trio: Julia „Jules“ Fischer (Piano, Gitarre, Gesang), Eduard Hausauer (E-Gitarre, Backingvocals), John McKoy (soulful vocals).',
			'Ein musikalisch spannender Abend mit einer besonderen Unplugged-Note, dreistimmigem Gesang und einer Band, die mit großer Präsenz und viel Gefühl auftritt.',
		],
		posterImage: concert17042026.src,
		bookingUrl: 'https://www.eventim.de/artist/the-jules-band/?affiliate=TUG&cityname=Wettringen',
	},
	{
		slug: 'band-night-2-22052026',
		title: 'Band Night II',
		date: '2026-05-22T20:00:00+02:00',
		bandName: 'Band 2',
		description: 'Kleiner Spätfrühjahrs-Termin mit dichter Energie und einem sehr direkten Live-Gefühl.',
		content: [
			'Temporary entry: the image is used as a concert poster placeholder until a final band name is assigned.',
			'Das Format bleibt bewusst klein und lokal: ein Abend, der eher nach Hauskonzert als nach großer Produktion wirkt.',
		],
		posterImage: band2_2.src,
	},
];

export function sortConcertsByDate(items: Concert[] = concerts) {
	return [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function isConcertPast(concert: Concert, now = new Date()) {
	return new Date(concert.date).getTime() < now.getTime();
}

export function getUpcomingConcerts(now = new Date()) {
	return sortConcertsByDate().filter((concert) => !isConcertPast(concert, now));
}

export function getPastConcerts(now = new Date()) {
	return sortConcertsByDate()
		.filter((concert) => isConcertPast(concert, now))
		.reverse();
}

export function getNextUpcomingConcert(now = new Date()) {
	return getUpcomingConcerts(now)[0] ?? null;
}

export function getConcertBySlug(slug: string) {
	return concerts.find((concert) => concert.slug === slug) ?? null;
}
