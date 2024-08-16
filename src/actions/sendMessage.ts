"use server";

export const sendMessage = async (
    email: string,
    object: string,
    content: string
) => {
    const message =
        `<div><p>MESSAGE FROM PORTFOLIO PAGE</p>` +
        `<strong>From:</strong><br></br><p>${email}</p>` +
        `<strong>Object:</strong><p><br></br>${object}</p> ` +
        `<strong>Message:</strong><br></br><p>${content}</p> </div> `;

    return fetch("/api/contact", {
        headers: {
            "Content-type": "application/json",
            Authorization: "FuckYouWhatAreYouEvenTryingToGet?",
        },
        method: "POST",
        body: JSON.stringify({ message }),
    })
        .then((res) => res.json())
        .then(({ result }) => {
            return result;
        })
        .catch((err) => {
            console.log(err);
            return "sorry an error occured";
        });
};
