type SearchField = {
  name?: string;
  specialization?: (string | undefined)[];
  zip?: string; // Could be represented as an integer but how to preform comparison
  yearsOfExperience?: number;
};

export { SearchField };
