https://dev.to/this-is-angular/testing-animations-in-angular-a-comprehensive-guide-4nhp

https://huantao.medium.com/angular-animation-programmatically-using-animation-builder-5eb9b661de84


## Do not test real animation implementations

#### Slowness and Inconsistencies:

* **Execution Time:** Running real animations can be slow, especially during test suites with many animation tests. This can significantly increase your test execution time.  
* **Browser Inconsistencies:** Animation behaviour can vary slightly across different browsers and even browser versions. This variability makes it difficult to write reliable tests that pass consistently everywhere.  
* **Visual Dependence:** Tests relying on visual inspection are subjective and prone to errors. A small visual difference might be a bug or just a minor rendering inconsistency.  

#### Limited Control and Isolation:  

* **Focus on Logic, not Visuals:** Your primary concern is testing the component's logic related to triggering animations and handling state changes, not the visual outcome.  
* **Difficult to Mock Events:** Testing specific animation states or timings becomes cumbersome when relying on real animations and user interaction.  

