var GpgkeyFixture = [];
GpgkeyFixture['not'] = [
// Missing end block & partial
    '-----BEGIN PGP PRIVATE KEY BLOCK-----\
Comment: GPGTools - https://gpgtools.org\
\
lQc+BFXHTB8BEADAaRMUn++WVatrw3kQK7/6S6DvBauIYcBateuFjczhwEKXUD6T\
hLm7nOv5/TKzCpnB5WkP+UZyfT/+jCC2x4+pSgog46jIOuigWBL6Y9F6KkedApFK\
xnF6cydxsKxNf/V70Nwagh9ZD4W5ujy+RCB6wYVARDKOlYJnHKWqco7anGhWYj8K\
KaDT+7yM7LGy+tCZ96HCw4AvcTb2nXF197Btu2RDWZ/0MhO+DFuLMITXbhxgQC/e\
aA1CS6BNS7F91pty7s2hPQgYg3HUaDogTiIyth8R5Inn9DxlMs6WDXGc6IElSfhC\
nfcICao22AlM6X3vTxzdBJ0hm0RV3iU1df0J9GoM7Y7y8OieOJeTI22yFkZpCM8i\
tL+cMjWyiID06dINTRAvN2cHhaLQTfyD1S60GXTrpTMkJzJHlvjMk0wapNdDM1q3\
jKZC+9HAFvyVf0UsU156JWtQBfkE1lqAYxFvMR/ne+kI8+6ueIJNcAtScqh0LpA5\
uvPjiIjvlZygqPwQ/LUMgxS0P7sPNzaKiWc9OpUNl4/P3XTboMQ6wwrZ3wOmSYuh\
FN8ez51U8UpHPSsI8tcHWx66WsiiAWdAFctpeR/ZuQcXMvgEad57pz/jNN2JHycA\
+awesPIJieX5QmG44sfxkOvHqkB3l193yzxu/awYRnWinH71ySW4GJepPQARAQAB\
/gMDAqlH4VSWFCj14O+FZQEELLxCFPz5kHLoAHGXkUt2PhTWoqzf3fZCs4QdRp0k\
x8iLvG9As8kyr7FvW9m4lpp7vwYvgc10GbSgXC',

// Missing data
'-----BEGIN PGP PRIVATE KEY BLOCK-----\
Comment: GPGTools - https://gpgtools.org\
\
lQc+BFXHTB8BEADAaRMUn++WVatrw3kQK7/6S6DvBauIYcBateuFjczhwEKXUD6T\
hLm7nOv5/TKzCpnB5WkP+UZyfT/+jCC2x4+pSgog46jIOuigWBL6Y9F6KkedApFK\
LWN2IVKPj2mia4lQHLub9OTlGkkO+pcgU1wQ\
    =hgWr\
-----END PGP PRIVATE KEY BLOCK-----',

// Good length wrong or damaged data
    '-----BEGIN PGP PRIVATE KEY BLOCK-----\
Comment: GPGTools - https://gpgtools.org\
\
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\
LWN2IVKPj2mia4lQHLub9OTlGkkO+pcgU1wQ\
    =hgWr\
-----END PGP PRIVATE KEY BLOCK-----'
];

GpgkeyFixture['ok'] = [
'-----BEGIN PGP PRIVATE KEY BLOCK-----\
Comment: GPGTools - https://gpgtools.org\
\
lQc+BFXHTB8BEADAaRMUn++WVatrw3kQK7/6S6DvBauIYcBateuFjczhwEKXUD6T\
hLm7nOv5/TKzCpnB5WkP+UZyfT/+jCC2x4+pSgog46jIOuigWBL6Y9F6KkedApFK\
xnF6cydxsKxNf/V70Nwagh9ZD4W5ujy+RCB6wYVARDKOlYJnHKWqco7anGhWYj8K\
KaDT+7yM7LGy+tCZ96HCw4AvcTb2nXF197Btu2RDWZ/0MhO+DFuLMITXbhxgQC/e\
aA1CS6BNS7F91pty7s2hPQgYg3HUaDogTiIyth8R5Inn9DxlMs6WDXGc6IElSfhC\
nfcICao22AlM6X3vTxzdBJ0hm0RV3iU1df0J9GoM7Y7y8OieOJeTI22yFkZpCM8i\
tL+cMjWyiID06dINTRAvN2cHhaLQTfyD1S60GXTrpTMkJzJHlvjMk0wapNdDM1q3\
jKZC+9HAFvyVf0UsU156JWtQBfkE1lqAYxFvMR/ne+kI8+6ueIJNcAtScqh0LpA5\
uvPjiIjvlZygqPwQ/LUMgxS0P7sPNzaKiWc9OpUNl4/P3XTboMQ6wwrZ3wOmSYuh\
FN8ez51U8UpHPSsI8tcHWx66WsiiAWdAFctpeR/ZuQcXMvgEad57pz/jNN2JHycA\
+awesPIJieX5QmG44sfxkOvHqkB3l193yzxu/awYRnWinH71ySW4GJepPQARAQAB\
/gMDAqlH4VSWFCj14O+FZQEELLxCFPz5kHLoAHGXkUt2PhTWoqzf3fZCs4QdRp0k\
x8iLvG9As8kyr7FvW9m4lpp7vwYvgc10GbSgXC5iZWyesolY/hNuEmVwNRXWLMiA\
UKp5UYvO438WW1ej1eO9rBUO6VIpZhCQf46KlbapXrNVd7rk8xApX0KI+SLkwnww\
AODJNaIDvVA0sqQFNbX704+xpx1i++rQgERHCfv0UsFz2PYv59FdRiQnuAfu2cV9\
YTB9DqTHcFRKyDTX/WrnjsfQOM1qvhyrLgeMzVdKdiwVpUNkH2aBHIgK84hcZP+W\
00QodpPkyXUoiJUqhJZtxbiwQ9u33wdU+u+UufCljkWGy3laQDNtMxrl6qdBSm07\
/xiNueVS/iVIb75p3UJODR9UrKSoCtDznYXT3oMsuyRFp5juPBbV5LR4IuflX2/B\
r1d5/J/qUBzXNyjzMzBiHzkX9yAAje94UHnwdMXldKqVtGGERsRnz2KKcE6c3jA+\
9/1b14Qvzpg87qWlYHWJUO3uw9v+rBlBue91svMwnjwQ+GGwh/Mx/bHDhQJy3M4U\
gnMfwIn2axq10nUsJ1lHAXE7MoKciw7oEfKiqEkHN2XGFV+Hj34exZ600Ry5I9ag\
Ps8ClE+FU6oDlgwycklSsXaqEpGyEh7cMNrmKXl0A5cIhZk0q1hL5/EzDXtNwQvY\
/B8Eya2DPoYEeWu8cXloTShounEvqiAlQ7VZkb6Ta3lWLV8ApxOJJnhHfaUHCB5X\
m/A++3SpRVnhrDXKtAhUXcJEQfC/S/KsNcHe9xVBFwiqGZ0uWS41lWYSWaCuI2Ce\
BpE+K+NbMIiUMSCmf6+/uG2/FgVb7OU32kKoROL44c4xWqFq3bAQs24REdd+et/Q\
lCs68TXE0Y70ffaKf3USmvDtSWxOAgKQ6ZdpCQVmPjzjlQWzKN9rljNUGX/mXl7h\
iz8CY0l2yZVRfwEokl0dY/sZGnyAa9bAECUulouq4jjlMBjTV2HG24Jxz8QwgJST\
KdM1/RsEHIG9azWB5ZxkumKYhFnn8JC/KJzvcAWkOssmE556csM2yH0VZ3TvYoFK\
r6AaxpWy0jovEalNMYYXdP9TvDd0l3mFeZo14yQzBLEZm20UCK2ST+utbjmgaM+/\
jwiCA+q3smCly88P4ONUdXCQvqoGxHt65OIjKIbpBIeuqbePGmmkLo1AV19JU0yy\
y61/0aYaVTjVyQSxsi3cH5ZhCsti8XCh4zT0GYcUsLY1tjjS2ZXnyUosDSJKPohl\
ewwMEZzd5/z6IzCHoI/64Q0aqGq02nkmedX3M0IMvOIqQ/hkDjMYbo5kY7aIRLQx\
EgFTtl5H66gPSidgrVSrIbJgtwCEaShmpLRM5J8hN4kg/4L0llyGlqr5vGMgZfdg\
9vRqswd0oKtdIG8zwkstyFSKw+PJ9bIm+Ls6UNgv6+XyrulbaiiNoxZFXQ080rJ4\
G+2LrsS29Dx1qxafWtYuuyd2QX+aCddVr1VXwwqIE0sxkdEyRqMjI3ieFIhjAPhD\
uNNKoMMvTD/qXxqCvXB7VeuyLZiXucziE2S0H2Tt6yzNnvTknZfe3gUqqn3qDC8c\
QQ9UtWimXKhRk6pOpUEFK5LVDB904VGi3+nNm2jZnf4IHf6Ddqb1bpxL5XX9vWBN\
0mBm1kuFLnGSMlv9Ljwm3kQvOJ/gHmzR4VqNxwwwVjAFcco3pxRdJIkf3mSdH1Th\
n9q1u41BP8rfwUdYea3VibEvYbKrnz/P/Zp0ZLCGhtentB9BZGEgTG92ZWxhY2Ug\
PGFkYUBwYXNzYm9sdC5jb20+iQI9BBMBCgAnBQJVx0wfAhsDBQkHhh+ABQsJCAcD\
BRUKCQgLBRYCAwEAAh4BAheAAAoJEBNTtbFdmwVPW9AQALLeVX4b3hn9qMAIDEK2\
e8A3IvKhHrGbcX7Sx40fRdadfWbYbkANyCSwvCFUkUYAHVBaZvJJatcGDyRToGyx\
+BQ6EV/koO9qaZwJu6ux95wlp/xT3/TUYTQCfGirJmOreJUldqhrYAGca+vKodbZ\
T+SFeoAQXjlqCPSr+CV8dbtx4kXrpbX8V5AJ2pw7GW+de2Ja7I1cdFrejYXEJApk\
3/vXbTRdLew8wrdyl1aGXLUgeKh2vRrFaXmBn+zLjmve3ZmPWitH2eG5QO0s8kze\
XqFZytFTg4SO+yzuP3eS5DMhR/jNjb0vdPFhmt9f+wqaID4rix8g3hXhBWpKxSlm\
712FqalHbMVueQWS24VTgHHxDK0W3FVVw9o4z2ap94SbMf+uBnLYJHSa/qIUh/tq\
7+rmU5PYtj2lqn9jz33U4CcmEok+fThy8JPam3zYZaB82S5MH2KQMObf/y4LKZK/\
9IvzTWWXlwxxDjPTSxTOupykDYnu+80YHhELzqla6DMBiMpqvuCENPFqRwhjXXl/\
ZOfCcxfLn+WrixXFPHI+ZzoMkJlmgiqkUXzvELUVFievkFIzVhzRDhhnljESqui/\
tN9d1mogvNY+dsM3b7jBi9kCeCc+rH1kWru/dley0B8tgVojCUWkndKmVwVEXJT9\
cIEuz5DkcuI9tylE42dlZa1/nQc+BFXHTB8BEADBVmb5bMKAvnRBSEgYSS89F6U0\
eTPODAp9fbPyC46enRj2wr5RnE+Tpf8C+N094TC/G86tfDERoJM4cLAZFFzvhO41\
Xj47hhb0cEuVvkGMArgJsA4ow3TIa3r9Zq3VSutb/9lPZLeX2hE1vGSGCLwFi2sP\
5TB21Zijmt+WQiCVnDbK76K6NpBlJJTOjatSUMlPqbhjx7r5vtcsGc6QB+aueaTI\
HzvvSYzFN1xbPnqr+i1cgP2Ok+2StR/Ip21D5v9urEr5mLE/+MTVaLAv4WvZRRAG\
rM/621YO7YX343uC1jlyQaONIgU5R7DWwhrOQXzQtMJe9fSQwOFfJsIRiJzbREwq\
xsIN5gZQ65OY2Kw6uSDFZMl+Gek/BXdnyx5lK9pBXOLwverRkBoTa2wGvxHmgJFj\
Hhcqf2DltGd19rc+QPpZvqnryWdx3EHfu3Gupj062ElVV4XJcEpMgi5YUScBMEsa\
5/mtmU6GDaLS7NbhMurTi2yMoRQUDbEepk2trbZHf/PcCfq/bO12Azsom00MlBoD\
l7v9JdStI00RCpQvdcCpJncP5SZI2QiDHPykx4gdXu3+TXRbccBK06BGTi1bpqKd\
BY0asx6F2SEfTgkjFM1JjLKRh2pRO9Rn8AfQ5AJYL6CT6IcooqSfz2sN6TsrWZ2/\
+wPz6EUoxC4AzTyYcQARAQAB/gMDAqlH4VSWFCj14H3a/VJ3BzV2yXC1NxY0ReNg\
imojrTz8tKj6amhksC82s9bSYQE/wBS/3FQYiPqw2ol/xcPnq3w3EZqhJ4SXE0dq\
dkMsWpvc09lWA/9YmpSMGM3FyWdcPgK2oIqkDBGFuTYNY8jpZNKWiPkl0Hz1glVX\
LBOg+pJy8ap1w5tG2r7jFdWX2BuZTv4tHv2pUmAXEL5+u7EFFSRsyLNVC+fCrdKd\
/VUzT3kxQ95UHC6JeVb3/ZX3ONrKOBjxEnCgt0x8hqsxqaOZT4yVqBHzKY0d+UEb\
L/AkahrGDZgr0vEFueIeOIsNsbVYGZe7Sn8VRf1LZqkrw7m2yayGm2kVwOIvz4V8\
YeMA4y8T8bvEmkUmDvKNXu8m930A7kVyNQoyT0TSTm32ca/eIjjYLKPZb94v5jd0\
nK3asGQhlUzkY29m1LbYAYRQVHKcBx48H7R6DHNEQr4KXP0L2/3TJKeMos2VeiYu\
dGrNITYIa/cwM3WBLT3LthM3f5dG8tj4YTo7W5L5sj22QSYQspcPLPZyLPhM+aqo\
8FBBISVnPE3xV6AdMr0/mzHz7JRqRpMqZymezNpZ/126KDxdrplvT6NZJksU5lwu\
dOC7aAGA+MSkSgrjiOUGTRs+meJNITmAlKjcMQ1t3rooHeYcsU2AN1i55cThF/s4\
pIeNCdtU6L+8BvzmAsZoF8SpbLKSYiCbPSGXYICtd0bRLTq+hlilyeyCQO6wBQo6\
92od3SKVnKwcpMRLnfPSV302p1gXiLcmMpljNG8UYN7atXCGMzKBzoy253JKO/j3\
Mv5Uoe/rBCCb3z9Rikh5Ef05iRTTdBk2+9Zlq03ZL8IpOrTFkpJFZFPdhIUpJ92u\
kBxm+hEw0ZgYR4kRxqXxb4hTUHzZlmETbmTeOTRsHVd5IL9rhdc2C1IYFJvQ4q4c\
sFJ3rwqmkWqbd8ZkKRaHHtakOTXoyCm/rcmscjd16T6QEQb65IMibIVPWBVCanpn\
G4AWBnCmFMUvzAiqRYkVsFGjF2UHzUpP23IhtZ9TzzhuheRZx5Zxc0HTf62ZymLa\
zhOje8ScV0z8IeOEFQHORxIkoskOU9RHvNevUUrOX4RpkdbxaGyjC0aEf/8pyMWZ\
cTPfZV1V0GHNOuT8agfTx6K2OCEcG70gjdsqETgehOJ1QTDWxzTZ4qdCVdenbz45\
2KiYvcNhtKcBfA2Z4JSyePqZFQG/+Y4uXKzxMVxVYY3hmclxvEnMCY5861I03tKZ\
L6rTo6/AhmS4DX3euTdY+2vC5yWIqmPP3TUqFXRB6wUtEv2a4LTn6I9H3bHs5nbh\
MfJc0pHgSZBG1E/CRtF4Io86rs4rqDwt8u/A4Cr9k/aDlOvSzfzKRTp02e3H81i3\
YwzP65mbpPI1rsYzU2SrmjzYq0fXJRyvlPIFS8tNM+lUiHYC8Nw7Os65Ll43wynO\
CIMTEb0nhxCAPwDfWmcH7/WxNwxIiDWdLl3phHnRIgwPVoUW2O5mTT6UNL7QWAkE\
0+5mVLqk/h+4mHxoyydeQxp7PZ8Ri//ln5UGk1CNxbkJZSGpHlFUuqOB3Rz0mOYJ\
1WEnTZ6mib8ZXVKti6SqYlnycnMk/DPn5hvkfrHKshRrJEFcAyTSh7WrN0Bml6TN\
rb32ItKWW+UVlzCHP4isbaJ7tkPFKt8B7wpvlEaLYBdi3h2zJNDlpWhmlYqXQ6xy\
+DDOFkzv0oXGKqYeswOrKNCKMssp0pkZNAAdOUmHb1XyDUaE8+HG6AziXNKpxenb\
RfH6iQIlBBgBCgAPBQJVx0wfAhsMBQkHhh+AAAoJEBNTtbFdmwVP9RwP/R1871CX\
/PXjwWmAs5q63aFL15ZOs6iwWg8fOR3I4ERhWLsXWItEHdHQ8YnXJ0R60HiPafLG\
y8mgJ8vu0c+wL/+fBYpxWLfe9V66SbMFaAh+LR7H8zngoIJj9WaEClppszX0iY+P\
I0b+CLbc7rpvjNpqazxUmPw3tF4JjlkrPI5MGfaKkkrtP3pWOZhhHLa3xYVBhWIF\
VpnC7lQoMdcuWEJm0FhKtQxC7B9zeo0cC+NtBFl2aWhlOGhzNsXfQxod07DujDP6\
57AYmypOjmWvpr+hO/4t1kH25PYxQNGnlNHpY5VodZ8oVVtt6GGHkPk/qdh1aDLg\
fkkU8MxhL2WzTeohbFm7TWlVVxrpDGIM+j2Q4RzXfjJb4VECTKWQWX9a4vAd5cJd\
W+WOPGM8D7wputc4xp6AiEUR0Zn4ASasst4p/rE7T9DWGR9bfzBWN9uQcRG7VzgX\
obUyurTXVTysP2TYl9iPLeVgWNe5qPiwrqqLCS0TdlAmPGWDdWAU2mfaPEdue+jj\
t5P7AqJWlumaMzLaLNtxkjkZjobTYGzEZb9omwDvejOmnuveJM2ZC2xjMvhddmCN\
Q1+E/vCUgdnk33EDxvk+LStE+6hQdfPTc6FIhB5ygHBcNLQB/1Txgj26reuPFKmj\
LWN2IVKPj2mia4lQHLub9OTlGkkO+pcgU1wQ\
    =hgWr\
-----END PGP PRIVATE KEY BLOCK-----'
];

exports.GpgkeyFixture = GpgkeyFixture;