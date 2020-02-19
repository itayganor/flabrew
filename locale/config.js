moment.locale('he', {
	months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	monthsShort : 'ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ'.split('_'),
	weekdays : 'יום ראשון_יום שני_יום שלישי_יום רביעי_יום חמישי_יום שישי_יום שבת'.split('_'),
	weekdaysShort : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	weekdaysMin : "א'_ב'_ג'_ד'_ה'_ו'_ש'".split('_'),
	longDateFormat : {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'DD/MM/YYYY',
		LL : 'D [ב]MMMM YYYY',
		LLL : 'D [ב]MMMM YYYY בשעה HH:mm',
		LLLL : 'dddd, D [ב]MMMM YYYY בשעה HH:mm'
	},
	calendar : {
        sameDay: "[היום ב־]HH:mm",
        nextDay: "[מחר ב־]HH:mm",
        nextWeek: "dddd [הבא ב־]HH:mm",
        lastDay: '[אתמול ב־]HH:mm',
        lastWeek: 'DD.MM.YYYY [ב־]HH:mm',
        sameElse: 'DD.MM.YYYY [ב־]HH:mm'
	},
	relativeTime : {
		future : 'עוד %s',
		past : 'לפני %s',
		s : 'כמה שניות',
        ss : '%d שניות',
		m : 'דקה',
		mm : '%d דקות',
		h : 'שעה',
		hh : '%d שעות',
		d : 'יום',
		dd : '%d ימים',
		M : 'חודש',
		MM : '%d חודשים',
		y : 'שנה',
		yy : '%d שנים'
	}
});
