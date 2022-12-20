const url = new URL(location.href);
const id = url.searchParams.get('id');

const userDetailsHeader = document.createElement('h1');
userDetailsHeader.innerText = 'USER DETAILS'
const userDetailsDiv = document.createElement('div');
userDetailsDiv.classList.add('user-details');
document.body.append(userDetailsHeader, userDetailsDiv);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const {
                name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } },
            phone, website, company: { name: companyName, catchPhrase, bs }
        } = user;

        const nameH2 = document.createElement('h2');
        nameH2.innerText = `${name}`;
        const userNameP = document.createElement('P');
        userNameP.innerHTML = `<span>username:</span> ${username}`;
        const emailP = document.createElement('p');
        emailP.innerHTML = `<span>email:</span> ${email}`;

        const addressDiv = document.createElement('div');
        addressDiv.innerHTML = `<h2>ADDRESS:</h2>`
        addressDiv.classList.add('user-address');
        const cityP = document.createElement('p');
        cityP.innerHTML = `<span>city:</span> ${city}`;
        const streetP = document.createElement('p');
        streetP.innerHTML = `<span>street:</span> ${street}`;
        const suiteP = document.createElement('p');
        suiteP.innerHTML = `<span>suite:</span> ${suite}`;
        const zipCodeP = document.createElement('p');
        zipCodeP.innerHTML = `<span>zipcode:</span> ${zipcode}`;
        const geoP = document.createElement('p');
        geoP.innerHTML = `<span>Geo:</span> lat (${lat}) lng (${lng})`;
        addressDiv.append(cityP, streetP, suiteP, zipCodeP, geoP, geoP);

        const phoneP = document.createElement('p');
        phoneP.innerHTML = `<span>phone:</span> ${phone}`;
        const webSiteP = document.createElement('p');
        webSiteP.innerHTML = `<span>website:</span> ${website}`;

        const companyDiv = document.createElement('div');
        companyDiv.classList.add('user-company');
        companyDiv.innerHTML = `<h2>COMPANY</h2>`
        const nameCompanyP = document.createElement('p');
        nameCompanyP.innerHTML = `<span>name:</span> ${companyName}`;
        const catchPhraseP = document.createElement('p');
        catchPhraseP.innerHTML = `<span>catchPhrase:</span> ${catchPhrase}`;
        const bsP = document.createElement('p');
        bsP.innerHTML = `<span>bs:</span> ${bs}`;
        companyDiv.append(nameCompanyP, catchPhraseP, bsP);

        userDetailsDiv.append(nameH2, userNameP, emailP, addressDiv, phoneP, webSiteP, companyDiv);
    });



