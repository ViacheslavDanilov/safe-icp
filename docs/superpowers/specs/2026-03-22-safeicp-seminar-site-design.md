# SafeICP Seminar Site Design

## Objective

Define the information architecture for a site-based presentation about SafeICP that works first as a live seminar talk and second as a browsable reference artifact.

## Presentation Goal

Primary goal:

- explain the SafeICP project and its value clearly from problem to results

Secondary goal:

- remain reusable as a narrative asset for broader audiences after the seminar

Core takeaway:

- primary: SafeICP is compelling because it connects device, machine learning, and validation into one credible pipeline
- secondary: optical signals plus deep learning can recover clinically meaningful ICP information

## Audience

- primary: scientific and technical audience
- secondary: clinical and medical audience
- overall target: mixed audience with moderate depth

The presentation should avoid both extremes:

- not too high-level and promotional
- not too deep or methods-heavy

## Format

- format: layered narrative site
- live talk target: flexible, centered around 15 minutes
- live core: 10 main pages
- reference layer: 1-2 additional pages

The site should feel like a browser-based presentation during the talk, while remaining easy to revisit later as a structured reference.

## Narrative Pattern

Opening pattern:

- start with a strong one-line breakthrough
- immediately ground it in the clinical problem

Primary narrative sequence:

- clinical problem
- SafeICP concept
- device and sensing principle
- ML bridge and dataset framing
- qualitative and quantitative results
- interpretation
- impact and next steps

## Page Structure

### 1. Title / Breakthrough

Purpose:

- establish the central promise immediately

Include:

- title
- one-line claim
- short subtitle

Avoid:

- dense technical detail
- results overload
- collaborator information dominating the page

### 2. Why ICP Matters

Purpose:

- explain why the problem matters clinically

Include:

- what ICP is
- why it matters
- why invasive monitoring is limiting and risky

Avoid:

- deep waveform physiology

### 3. What SafeICP Is

Purpose:

- introduce SafeICP as the response to the problem

Include:

- concise description of the system
- what kind of signal it captures
- why it is different from invasive monitoring
- light collaborator/context strip

Avoid:

- full collaborator page at this stage

### 4. How the Device Sees Through the Skull

Purpose:

- make the sensing principle intuitive

Include:

- probe placement
- near-infrared light
- blood-flow-related optical signal
- simple signal acquisition chain

Avoid:

- optics-heavy derivations

### 5. From Optical Signal to ICP

Purpose:

- explain that the device does not directly measure ICP and that ML is needed

Include:

- difference between measured optical dynamics and estimated ICP
- why a learned mapping is required

Avoid:

- dense modeling detail

### 6. ML Setup and Data

Purpose:

- explain the learning problem credibly

Include:

- paired invasive ICP and optical recordings
- iNPH-centered dataset framing
- model families
- training logic
- why time-series modeling is appropriate

Avoid:

- a separate standalone cohorts page
- a dense methods appendix tone

### 7. Qualitative Model Behavior

Purpose:

- show that the model tracks meaningful temporal behavior

Include:

- one or two strong predicted-vs-true examples
- brief explanation of what the audience should notice

### 8. Quantitative Results and Metrics

Purpose:

- provide measurable evidence

Include:

- MAE as the anchor metric
- uncertainty metrics only when they improve credibility and understanding
- simple interpretation of each metric used

Avoid:

- metric overload

### 9. What the Results Mean

Purpose:

- interpret the evidence with balance and scientific honesty

Include:

- what was demonstrated
- what remains limited
- why the results still matter

### 10. Impact and Next Steps

Purpose:

- close with significance and future direction

Include:

- scientific and clinical relevance
- translational value
- next research or deployment steps

Keep this lighter than the technical core.

### 11. Reference Page: Collaborators

Purpose:

- provide attribution and authorship visibility without slowing the main narrative

Include:

- organizations
- selected key people or roles
- grouped contribution framing where useful

### 12. Reference Page: Extra Results

Purpose:

- provide support material for post-talk browsing or discussion

Include:

- extra plots
- secondary examples
- backup figures or additional metrics

## Structural Decisions

Explicitly de-emphasized as standalone sections:

- ICP wave physiology
- laser safety as a dedicated page
- clinical cohorts and validation as their own page

These topics may appear only where they support the main story:

- physiology as minimal context if needed
- safety only when relevant to credibility
- dataset and cohort context inside the ML section

## Collaborator Placement

Approved pattern:

- early page: small collaborator/logo/name strip on the context page
- later page: fuller acknowledgement/collaboration reference page

This preserves attribution while protecting early narrative momentum.

## Content Density Rule

Each live-core page should answer one main question only.

Examples:

- why is this problem important?
- what is SafeICP?
- how does it work?
- how is ML used?
- what did it achieve?

If a page starts answering multiple questions, it should be split or simplified.

## Source Mapping

Primary source of truth:

- `project_info/Review_Modelo Informe CT Final SafeICP.html`

Supporting sources:

- `project_info/metrics/Standard & Uncertainty Metrics 278c7974ebc2803c84f4e840eadf2ea6.md`
- `project_info/predictions/`
- `project_info/error_distributions/`

Optional background only:

- `project_info/icp_waves.md`

Narrative tone reference only:

- `project_info/video/safeicp_a_window_into_the_brain.txt`

## Required MD Outline Contract

The future structure-generating prompt should ask for a Markdown outline that includes, for each page:

- page number and title
- narrative purpose
- one-sentence key message
- content blocks to include
- source materials to draw from
- suggested visuals or figures
- what to avoid
- optional speaker-note intent or transition cue

The output should also include:

- a short summary of the overall narrative arc
- a final section called `Open Questions / Content Gaps`

## Constraints for the Prompt

The prompt should enforce that the generated outline:

- targets a mixed audience with scientific credibility and moderate depth
- is optimized for a 15-minute seminar talk
- uses a layered narrative site structure
- keeps a live core of about 10 pages plus 1-2 reference pages
- prioritizes problem -> device -> ML -> results -> impact
- folds dataset and clinical context into the ML page
- keeps collaborators light early and fuller near the end
- avoids overbuilding physiology, safety, or appendix material
- produces concise presentation-ready descriptions instead of report-style summaries

## Open Questions

- Which exact figures from `predictions/` and `error_distributions/` should anchor pages 7 and 8?
- How much collaborator detail should appear on the reference page: names only, roles, or grouped contributions?
- Whether uncertainty metrics should appear in the live core or remain on the extra results page.
