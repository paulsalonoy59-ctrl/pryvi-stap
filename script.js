function saveContact() {

    const contact = `
BEGIN:VCARD
VERSION:3.0
FN:Paul
TITLE:IT Student & Developer
EMAIL:paulsalonoy59@gmail.com
URL:${window.location.href}
NOTE:PRYVI STAP Digital Identity
END:VCARD
`;

    const blob = new Blob(
        [contact],
        { type: "text/vcard" }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download = "Paul-PRYVI-STAP.vcf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}


async function shareProfile() {

    const shareData = {

        title: "Paul | PRYVI STAP",

        text:
            "Check out my PRYVI STAP digital profile.",

        url: window.location.href

    };


    if (navigator.share) {

        try {

            await navigator.share(shareData);

        } catch (error) {

            console.log("Share cancelled.");

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert(
                "Profile link copied!"
            );

        } catch (error) {

            alert(
                "Copy this page URL to share your profile."
            );

        }

    }

}