import { Person as PersonType } from '../models/types/Person';

export function sortPeople(peopleArr: PersonType[], language: string) {
    
    const peopleOrderedByName = peopleArr.sort((a, b) => a.Nazwisko.localeCompare(b.Nazwisko, language, { sensitivity: "base" }));

    const orderedTitles: Record<string, string[]> = {
      president: ["Prezeska", "Prezes", "Président", "Présidente"],
      vicePresident: ["Wiceprezeska", "Wiceprezes", "Vice-président", "Vice-présidente"],
      treasurer: ["Skarbniczka", "Skarbnik", "Trésorier", "Trésorière"],
      secretary: ["Sekretarz", "Sekretarzyni", "Secrétaire", "Secrétaire adjointe"]
    };

    const orderedArr: PersonType[] = [];

    for (const key in orderedTitles) {
      const filtered = peopleOrderedByName.filter(p => orderedTitles[key].includes(p.Funkcja.trim()));
      orderedArr.push(...filtered);
    }

    const others = peopleOrderedByName.filter(p => ![...orderedArr].includes(p));
    orderedArr.push(...others);

    return orderedArr;
}