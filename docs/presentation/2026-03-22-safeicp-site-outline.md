# SafeICP Site Presentation Outline

## 1. Overall Narrative Arc

This presentation should work as a browser-based seminar talk first and as a lightweight reference site second. The story should open with the central breakthrough, immediately ground that breakthrough in the clinical problem of invasive intracranial pressure monitoring, and then walk the audience through the full SafeICP pipeline: sensing, machine learning, evidence, interpretation, and future impact.

The key narrative move is to keep the audience from seeing SafeICP as either only a hardware device or only an ML experiment. The site should instead present SafeICP as a credible translational pipeline: a non-invasive optical sensing platform, a learned mapping from optical dynamics to ICP, and a validation effort strong enough to justify scientific attention and future clinical development.

Because the audience is mixed, each page should stay focused on one question at a time. The live core should remain clear and moderately technical. Methods should be credible but not overloaded. Metrics should be explained in plain language. Limitations should be visible, especially uncertainty calibration and limited high-ICP coverage, but they should appear as part of a balanced interpretation rather than as a detour that weakens the whole story.

## 2. Page-by-Page Structure

### Page 1

- `Page Number`: 1
- `Working Title`: A Safe Window Into Brain Pressure
- `Narrative Purpose`: Establish the promise of the project in one memorable frame before any technical detail appears.
- `Key Message`: SafeICP aims to estimate clinically meaningful ICP non-invasively by combining optical sensing with machine learning.
- `Content Blocks`:
  - title
  - one-line breakthrough claim
  - short subtitle that positions the talk as a pipeline from sensing to ICP estimation
- `Source Material`:
  - `project_info/video/safeicp_a_window_into_the_brain.txt`
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` summary and conclusions sections
- `Suggested Visuals / Figures`:
  - clean hero composition with a device silhouette or extracted hardware image from the report hardware section
  - abstract optical or signal motif rather than a data-heavy chart
- `What To Avoid`:
  - long project context
  - metric callouts
  - crowded logos
- `Transition To Next Page`: If this is the promise, the audience immediately needs to understand why ICP is hard enough to matter.

### Page 2

- `Page Number`: 2
- `Working Title`: Why ICP Matters
- `Narrative Purpose`: Create urgency by showing why ICP monitoring is clinically important and why the status quo is problematic.
- `Key Message`: ICP is a critical brain-health variable, but gold-standard measurement is invasive, risky, and therefore unavailable in many situations where monitoring would help.
- `Content Blocks`:
  - brief explanation of ICP as a clinically meaningful signal
  - why current invasive monitoring requires drilling into the skull
  - risks and access limitations of the invasive standard
- `Source Material`:
  - `project_info/video/safeicp_a_window_into_the_brain.txt`
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` executive summary and conclusions
- `Suggested Visuals / Figures`:
  - a simple invasive-vs-non-invasive comparison panel
  - one concise clinical-stakes graphic or diagram
- `What To Avoid`:
  - long physiology lecture
  - Lundberg wave taxonomy
- `Transition To Next Page`: Once the problem is clear, the audience is ready to hear what SafeICP actually is.

### Page 3

- `Page Number`: 3
- `Working Title`: What SafeICP Is
- `Narrative Purpose`: Introduce the project as a concrete response to the clinical problem.
- `Key Message`: SafeICP is a non-invasive monitoring approach that uses optical sensing to capture brain-related hemodynamic dynamics and translate them into ICP-relevant information.
- `Content Blocks`:
  - one-paragraph project definition
  - what the system measures at a high level
  - why this is different from direct invasive sensing
  - compact collaborator or consortium strip
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` summary of project results
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` conclusions
- `Suggested Visuals / Figures`:
  - one clean device photo or prototype image from the report hardware section
  - a minimal bottom strip with organizations or roles
- `What To Avoid`:
  - full collaborator biographies
  - deep optics
- `Transition To Next Page`: The audience now knows what SafeICP is, but not how light can capture useful brain-related information through the skull.

### Page 4

- `Page Number`: 4
- `Working Title`: How the Device Sees Through the Skull
- `Narrative Purpose`: Make the sensing principle intuitive without turning the page into an optics methods appendix.
- `Key Message`: Safe near-infrared light and speckle dynamics provide a non-invasive readout of cerebral blood-flow-related behavior that carries ICP-relevant information.
- `Content Blocks`:
  - forehead probe placement
  - near-infrared illumination
  - scattered light and speckle fluctuation concept
  - blood-flow-related signal acquisition chain
- `Source Material`:
  - `project_info/video/safeicp_a_window_into_the_brain.txt`
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` hardware and SCOS platform sections
  - `project_info/Review_Modelo Informe CT Final SafeICP.fld/image001.png`
  - `project_info/Review_Modelo Informe CT Final SafeICP.fld/image002.png`
- `Suggested Visuals / Figures`:
  - simplified sensing diagram
  - annotated probe or prototype image
- `What To Avoid`:
  - equations
  - laser safety detail that belongs later only if needed
- `Transition To Next Page`: The device captures optical dynamics, but it does not directly output ICP, so the next question is how that signal becomes pressure estimates.

### Page 5

- `Page Number`: 5
- `Working Title`: From Optical Signal to ICP
- `Narrative Purpose`: Explain the conceptual bridge from sensing to estimation.
- `Key Message`: SafeICP measures flow-related optical dynamics, not pressure itself, so a learned time-series mapping is needed to infer ICP from paired optical and invasive data.
- `Content Blocks`:
  - measured signal vs target signal distinction
  - why temporal structure matters
  - high-level inference pipeline from optical signal to predicted ICP
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` Task 3.1 and ML sections
  - `project_info/video/safeicp_a_window_into_the_brain.txt`
- `Suggested Visuals / Figures`:
  - custom pipeline diagram: optical recording -> preprocessing -> model -> ICP prediction
  - simple side-by-side of input signal vs output estimate
- `What To Avoid`:
  - naming many architectures before the problem setup is clear
  - detailed training protocol
- `Transition To Next Page`: Once the audience understands the mapping problem, the next step is to show what data and models were used to learn it.

### Page 6

- `Page Number`: 6
- `Working Title`: ML Setup and Data
- `Narrative Purpose`: Give the audience confidence that the ML story rests on paired measurements and a meaningful clinical dataset.
- `Key Message`: The ML models were trained on paired optical and invasive ICP recordings, centered on the iNPH cohort and expanded with Katzman infusion data to broaden pressure coverage.
- `Content Blocks`:
  - dataset framing with iNPH as the main cohort
  - note that the report references 58 iNPH recordings for core analysis and an expanded 68-subject or 52-valid-subject ML subset
  - why paired invasive ICP recordings are essential
  - model families: InceptionTime, mWDN, TCN
  - note on Katzman infusion data for controlled high-ICP variation
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` ML architecture and cohort sections
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` Katzman protocol sections
- `Suggested Visuals / Figures`:
  - compact cohort and data-source diagram
  - three-model comparison strip with one-line role for each model
- `What To Avoid`:
  - standalone cohorts page
  - full hyperparameter table
- `Transition To Next Page`: With the setup in place, the audience needs to see whether the model behavior actually looks convincing in time-series form.

### Page 7

- `Page Number`: 7
- `Working Title`: Qualitative Model Behavior
- `Narrative Purpose`: Show visually that the model tracks temporal ICP behavior rather than only producing plausible summary numbers.
- `Key Message`: Representative predictions track the overall shape and dynamics of the invasive ICP trace well enough to make the learned relationship visually credible.
- `Content Blocks`:
  - one strong representative predicted-vs-true example
  - one short annotation on what to notice
  - optional note that sharp spikes remain challenging
- `Source Material`:
  - `project_info/predictions/predictions_InceptionTime_subject_08.png`
  - `project_info/predictions/predictions_InceptionTime_subject_48.png`
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` figure captions for subject 08 and subject 48
- `Suggested Visuals / Figures`:
  - primary figure: `project_info/predictions/predictions_InceptionTime_subject_08.png`
  - optional small backup thumbnails for `mWDN` and `TCN`
- `What To Avoid`:
  - placing too many patient examples on one page
  - forcing the audience to compare six traces at once
- `Transition To Next Page`: The trace looks convincing, but the audience still needs quantitative evidence and metric interpretation.

### Page 8

- `Page Number`: 8
- `Working Title`: Quantitative Results and Metrics
- `Narrative Purpose`: Translate model performance into a compact, interpretable evidence page.
- `Key Message`: The best-performing models reach clinically competitive error levels around 5.3-6.0 mmHg MAE, while uncertainty bands remain under-calibrated and should be interpreted cautiously.
- `Content Blocks`:
  - anchor metric: MAE
  - secondary metric: RMSE only if it improves clarity
  - uncertainty metrics: PICP and MPIW in plain language
  - compare InceptionTime, mWDN, and TCN at a high level
  - mention that mWDN shows the highest concentration of low-error predictions, while InceptionTime shows best overall MAE
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` model comparison and uncertainty sections
  - `project_info/metrics/Standard & Uncertainty Metrics 278c7974ebc2803c84f4e840eadf2ea6.md`
  - `project_info/error_distributions/error_distributions_mWDN_fold_3.png`
  - `project_info/error_distributions/error_distributions_InceptionTime_fold_1.png`
  - `project_info/error_distributions/error_distributions_TCN_fold_1.png`
- `Suggested Visuals / Figures`:
  - compact custom comparison table for MAE and uncertainty
  - one supporting error-distribution figure, preferably `project_info/error_distributions/error_distributions_mWDN_fold_3.png`
  - optional small metric explainer labels for MAE, PICP, and MPIW
- `What To Avoid`:
  - full metric glossary
  - CRPS unless it becomes necessary later
  - a dense panel of all three error-distribution figures at equal size
- `Transition To Next Page`: Numbers alone are not enough; the audience now needs a balanced interpretation of what has and has not been demonstrated.

### Page 9

- `Page Number`: 9
- `Working Title`: What the Results Mean
- `Narrative Purpose`: Interpret the evidence with scientific honesty and keep the story balanced.
- `Key Message`: SafeICP has demonstrated a credible end-to-end pipeline for non-invasive optical ICP estimation, but high-ICP coverage and uncertainty calibration still need improvement.
- `Content Blocks`:
  - what has been shown: competitive MAE, meaningful temporal tracking, large synchronized dataset, non-invasive B-wave relevance if needed in one sentence
  - what remains limited: under-calibrated uncertainty and limited high-ICP data
  - why the result still matters for the field
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` achievements against objectives
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` conclusions
- `Suggested Visuals / Figures`:
  - three-column summary frame: demonstrated / still limited / why it matters
  - no new heavy figure required
- `What To Avoid`:
  - sounding defensive
  - repeating the previous metrics page in full
- `Transition To Next Page`: With the evidence interpreted, the final core question is what this unlocks next.

### Page 10

- `Page Number`: 10
- `Working Title`: Impact and Next Steps
- `Narrative Purpose`: Close the live talk with significance and plausible future direction.
- `Key Message`: SafeICP opens a realistic path toward safer and more accessible ICP monitoring, with the next gains likely to come from broader datasets, better uncertainty estimation, and continued clinical translation.
- `Content Blocks`:
  - scientific impact
  - clinical impact
  - translational direction
  - next-step roadmap
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` conclusions
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` project results exploitation
- `Suggested Visuals / Figures`:
  - concise roadmap or impact ladder
  - one line on broader applications if space allows
- `What To Avoid`:
  - business-heavy commercialization page
  - returning to methods detail
- `Transition To Next Page`: The live story is complete, and the audience can now move into reference material if needed.

### Page 11

- `Page Number`: 11
- `Working Title`: Collaborators and Contributions
- `Narrative Purpose`: Give proper attribution without disturbing the main talk arc.
- `Key Message`: SafeICP is a consortium effort combining photonics, ML, clinical validation, safety engineering, and translational planning.
- `Content Blocks`:
  - organizations grouped by role
  - selected key contributors or contribution owners if available
  - one-line role framing for each group
- `Source Material`:
  - `project_info/Review_Modelo Informe CT Final SafeICP.html` dissemination, collaboration, and conclusions sections
  - any prior presentation material you already use for collaborator attribution
- `Suggested Visuals / Figures`:
  - logo grid grouped by contribution area
  - optional contributor-role matrix
- `What To Avoid`:
  - full biographies
  - a page that looks like grant administration
- `Transition To Next Page`: If the audience wants more evidence, the final reference page can provide extra plots and backup material.

### Page 12

- `Page Number`: 12
- `Working Title`: Extra Results and Backup Figures
- `Narrative Purpose`: Hold material that is useful after the talk or during discussion but not essential to the live core.
- `Key Message`: Additional patient examples and model-specific figures support the main claims and give room for post-talk exploration.
- `Content Blocks`:
  - alternate prediction examples
  - extra uncertainty example
  - one or two additional model comparison figures
  - optional B-wave figure if later judged helpful
- `Source Material`:
  - `project_info/predictions/predictions_mWDN_subject_48.png`
  - `project_info/predictions/predictions_TCN_subject_48.png`
  - `project_info/predictions/predictions_mWDN_subject_08.png`
  - `project_info/predictions/predictions_TCN_subject_08.png`
  - `project_info/error_distributions/`
  - `project_info/Review_Modelo Informe CT Final SafeICP.html`
- `Suggested Visuals / Figures`:
  - subject 48 uncertainty-focused example
  - one side-by-side comparison across architectures
  - one extra error-distribution image if needed
- `What To Avoid`:
  - turning the reference layer into a second live talk
  - too many small unreadable figures
- `Transition To Next Page`: End of reference layer.

## 3. Live Core vs Reference Layer

### Live Core

- Page 1: A Safe Window Into Brain Pressure
- Page 2: Why ICP Matters
- Page 3: What SafeICP Is
- Page 4: How the Device Sees Through the Skull
- Page 5: From Optical Signal to ICP
- Page 6: ML Setup and Data
- Page 7: Qualitative Model Behavior
- Page 8: Quantitative Results and Metrics
- Page 9: What the Results Mean
- Page 10: Impact and Next Steps

### Reference Layer

- Page 11: Collaborators and Contributions
- Page 12: Extra Results and Backup Figures

## 4. Open Questions / Content Gaps

- The exact collaborator page content is still unresolved. The report supports institutions and roles, but the final list of named people should come from your prior seminar materials or a curated author list.
- The dataset counts should be normalized before design begins. The report references 58 iNPH recordings, a 68-subject or 52-valid-subject ML subset, and a broader 120+ synchronized optical-ICP dataset. These can coexist, but the live page needs one clean framing sentence.
- The hardware page needs one primary visual. We should choose whether to use a real prototype image, a simplified sensing schematic, or a hybrid of both.
- The metrics page should decide whether uncertainty lives in the live core or moves partly into the backup layer. Right now the recommendation is to keep MAE and a light PICP or MPIW interpretation in the core and push deeper uncertainty detail into backup material.
- The role of B-wave detection should stay secondary unless the seminar audience is expected to care specifically about iNPH diagnosis or slow-wave analysis.
