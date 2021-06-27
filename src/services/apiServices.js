const axios = require('axios');

const buildApiUrl = () => {
	return 'http://localhost:5000/api/';
}

/**
 * Makes a get request to the given url.
 * @param {string}         url     The url to make a get request to
 * @param {HttpParams}     params http params to send to api
 * @param {Record<string, string>} additionalHeaders
*/
export const get = async (
	url,
	params = {},
	additionalHeaders = {},
) => {
  try {
    const res = await axios.get(buildApiUrl() + url);

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
}

/**
 * Makes a post request to the given url.
 * @param {string}                  url               The url to make a post request to
 * @param {string}                  body              The body of the post request
 * @param {Record<string, string>}  additionalHeaders A list of key/value pairs to add as headers
 */
export const post = async (
	url,
	body,
	additionalHeaders = {},
	) => {
	try {
    const res = await axios.post(buildApiUrl() + url, body, {
			headers: {
				...additionalHeaders,
			},
		});

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
}
