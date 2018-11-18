const regexes = [
	/^\*\s*html/,
	/^\*\:first-child\s?\+\s?html/,
	/^\*\s?\+\s?html/,
	/^body\*.+/,
	/^html\s?>\s?body/,
	/\\$/,
	/^\:root\s/,
	/\bbody:first-child\b/,
	/\bbody:last-child\b/,
	/body:nth-of-type\(1\)/,
	/\bbody:first-of-type\b/,
	/:not\(\[attr\*\=[\"\\\']{2}]\)/,
	/:not\(\*:root\)/,
	/^body:empty/,
	/x:-moz-any-link/,
	/body:not\(:-moz-handler-blocked\)/,
	/_::selection/,
	/x:-IE7/,
	/html:first-child/,
	/html\[xmlns\*=[\'\"]{2}]/,
	/_::?-(?:moz|o|ms)-/
]

module.exports = selector => {
	return regexes.some(regex => {
		return regex.test(selector)
	})
}
