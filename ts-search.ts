type SearchField = {
  name?: string;
  specialization?: string[];
  zip?: string; // Could be represented as an integer but how to preform comparison
  yearsOfExperience?: number;
};

/**
 * Function for getting the applicable data based on parameters
 *
 * @author Edward Thomas
 * ------------------------------------------
 * @description
 * Function meant for explaining the logic of a search directory
 * asynchronously. The point of the asynchronous action is to run
 * this function every time the user presses a key. The search
 * will therefore remain synced with the user typing.
 * ------------------------------------------
 * @license GNU
 *
 * @param - User's current search field value(s)
 *
 * @async
 * @returns `typeof Promise<SearchField[]>` - All searches that match users credentials
 *
 */
async function getApplicableDataAsync({
  name,
  specialization,
  zip,
  yearsOfExperience,
}: SearchField): Promise<SearchField[]> {
  // Need some way of getting all data (API -> (database, server, etc.), hardcoded in a file)
  const allCoachData: SearchField[] | null = await null;
  const applicableSearchResults: SearchField[] = [];

  allCoachData.map((coachData: SearchField) => {
    const {
      name: coachName,
      specialization: coachSpecialization,
      zip: coachZip,
      yearsOfExperience: coachYearsOfExperience,
    } = coachData;
    // May need a try/catch block for `null` parameters

    if (coachName.includes(name)) {
      applicableSearchResults.push(coachData);
    }
    if (
      specialization.find((special) => coachSpecialization.includes(special))
    ) {
      applicableSearchResults.push(coachData);
    }
    if (coachZip.includes(zip)) {
      applicableSearchResults.push(coachData);
    }
    if (yearsOfExperience <= coachYearsOfExperience) {
      applicableSearchResults.push(coachData);
    }
  });

  return applicableSearchResults;
}
