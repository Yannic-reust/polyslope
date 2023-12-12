const About = () => {
    return ( 
        <div>
            <h2 className="text-h-lg font-karmina mb-4">Das Projekt</h2>
            <p className="text-p-lg">PolySlope wurde im Rahmen des STUW1-Moduls im Studiengang Digital Ideation an der Hochschule Luzern entwickelt. An der Umsetzung waren Yannic Reust, Cyril Hügli und Ramon Grutschnig beteiligt. Es handelt sich um eine interaktive 3D-Karte eines Schweizer Skigebiets. Als Vorbild haben wir das Gebiet Mürren-Schilthorn in der Jungfrau Region verwendet.</p>
            <p className="text-p-lg"><br />Bei Fragen zum Projekt kannst du uns über <a className="text-accent" href="#">info@polyslope.ch</a> erreichen.</p>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Technologien</h3>
            <p className="text-p-lg">Für die Umsetzung von PolySlope haben wir verschiedene Technologien im Einsatz. Hier hast du einen Überblick über unseren Tech Stack.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li>Erstellung Map und Modellierung: Blender mit BlenderGIS Plugin</li>
                <li>Programmierung: React Three Fiber</li>
                <li>Styles: Tailwind CSS</li>
            </ul>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Disclaimer</h3>
            <p className="text-p-lg">PolySlope ist ein nicht kommerzielles Schulprojekt, das eine interaktive 3D-Karte des Skigebiets Mürren-Schilthorn zeigt. Bitte beachte, dass alle Informationen ohne Gewähr sind, da PolySlope keine offiziellen Schnittstellen zum Skigebiet betreibt.</p>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Quellenangaben</h3>
            <p className="text-p-lg">Bei der Beschaffung von Daten für unsere Skikarte haben wir auf verschiedene Tools zurückgegriffen.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li>Kartendaten: <a className="text-accent" target="_blank" href="https://www.swisstopo.admin.ch/">©swisstopo</a></li>
                <li>Wintersport Icons: <a className="text-accent" target="_blank" href="https://infosnow.ch">infosnow.ch</a></li>
                <li>Wetter Daten <a className="text-accent" target="_blank" href="https://open-meteo.com/">Open-Meteo.com</a></li>
            </ul>
        </div>
     );
}
 
export default About;