const About = () => {
    return ( 
        <div>
            <h2 className="text-h-lg font-karmina mb-4">Das Projekt</h2>
            <p className="text-p-lg">PolySlope wurde im Rahmen des STUW1-Moduls im Studiengang Digital Ideation an der Hochschule Luzern entwickelt. An der Umsetzung waren Yannic Reust, Cyril Hügli und Ramon Grutschnig beteiligt. Es handelt sich um eine interaktive 3D-Karte des Skigebietes Mürren-Schilthorn in der Jungfrau Region.</p>
            <p className="text-p-lg"><br />Bei Fragen zum Projekt kannst du uns gerne über GitHub kontaktieren.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li><a className="text-accent" target="_blank" href="https://github.com/Yannic-reust">Yannic</a></li>
                <li><a className="text-accent" target="_blank" href="https://github.com/Cyril676">Cyril</a></li>
                <li><a className="text-accent" target="_blank" href="https://github.com/DerBeton">Ramon</a></li>
            </ul>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Technologien</h3>
            <p className="text-p-lg">Für die Umsetzung von PolySlope haben wir verschiedene Technologien im Einsatz. Hier hast du einen Überblick über unseren Tech Stack.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li>Erstellung Map und Modellierung: Blender mit BlenderGIS Plugin</li>
                <li>Programmierung: React</li>
                <li>Darstellung 3D Inhalte: React Three Fiber</li>
                <li>Styles: Tailwind CSS</li>
            </ul>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Disclaimer</h3>
            <p className="text-p-lg">PolySlope ist ein nicht kommerzielles Schulprojekt, das eine interaktive 3D-Karte des Skigebiets Mürren-Schilthorn zeigt. Bitte beachte, dass alle Informationen ohne Gewähr sind, da PolySlope keine offiziellen Schnittstellen zum Skigebiet betreibt.</p>

            <h3 className="text-h-md font-karmina mt-14 mb-4">Quellenangaben</h3>
            <p className="text-p-lg">Bei der Beschaffung von Daten für unsere Skikarte haben wir auf verschiedene Tools zurückgegriffen.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li>Kartendaten: <a className="text-accent" target="_blank" href="https://www.swisstopo.admin.ch/">©swisstopo</a></li>
                <li>Wintersport Icons: <a className="text-accent" target="_blank" href="https://infosnow.ch">infosnow.ch</a></li>
                <li>Weitere Icons: <a className="text-accent" target="_blank" href="https://iconmonstr.com/">iconmonstr</a></li>
                <li>Wetter Daten <a className="text-accent" target="_blank" href="https://open-meteo.com/">Open-Meteo.com</a></li>
            </ul>

            <p className="text-p-lg mt-4">Hast du unser Easter Egg schon entdeckt? Dafür wurden folgende 3D-Modelle verwendet.</p>
            <ul className="text-p-lg list-disc list-inside mt-2">
                <li><a className="text-accent" target="_blank" href="https://poly.pizza/m/3Q7goR4wcNE">Surprised Santa</a> by Matt Connors <a className="text-accent" target="_blank" href="https://creativecommons.org/licenses/by/3.0/">[CC-BY]</a> via Poly Pizza</li>
                <li><a className="text-accent" target="_blank" href="https://poly.pizza/m/3QKT0IHKALm">Santa Hat</a> by <a className="text-accent" target="_blank" href="https://poly.pizza/u/Joe%20Dorman">Joe Dorman</a> <a className="text-accent" target="_blank" href="https://creativecommons.org/licenses/by/3.0/">[CC-BY]</a> via Poly Pizza</li>
                <li><a className="text-accent" target="_blank" href="https://poly.pizza/m/aVl3UrWiDg1">Snowman</a> by <a className="text-accent" target="_blank" href="https://poly.pizza/u/jeremy">jeremy</a> <a className="text-accent" target="_blank" href="https://creativecommons.org/licenses/by/3.0/">[CC-BY]</a> via Poly Pizza</li>
                <li><a className="text-accent" target="_blank" href="https://poly.pizza/m/0lhfGJvD4dl">skis</a> by <a className="text-accent" target="_blank" href="https://poly.pizza/u/apelab">apelab</a> <a className="text-accent" target="_blank" href="https://creativecommons.org/licenses/by/3.0/">[CC-BY]</a> via Poly Pizza</li>
            </ul>
        </div>
     );
}
 
export default About;