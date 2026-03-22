# SafeICP Site Structure Brainstorming Prompt

You are helping design the information architecture for a presentation that will be delivered as a website, not as a classic PowerPoint deck.

The repository already contains the source material. Read the available project files and produce a Markdown outline for the presentation structure.

## Your task

Create a presentation-structure blueprint for a **Layered Narrative Site**:

- first use case: a live seminar talk
- second use case: a browsable reference site after the talk

Do **not** write final slide copy yet.
Do **not** design visuals in detail yet.
Do **not** build code.

Your output should be an **MD file outline** that defines what pages the site should have, what each page is supposed to do, and which source material supports it.

## Audience and communication level

Target audience:

- primary: scientific / technical audience
- secondary: clinical / medical audience
- overall: mixed audience

Depth:

- moderate depth
- scientifically credible
- not too high-level
- not too methods-heavy

## Talk format

Optimize for a seminar presentation of about **15 minutes**, but keep the structure flexible enough to compress or expand slightly.

Preferred format:

- about **10 core live-talk pages**
- plus **1-2 lightweight reference pages**

## Core narrative priority

The presentation should primarily explain the project clearly from problem to results.

Primary takeaway:

- SafeICP is compelling because it connects device, machine learning, and validation into one credible pipeline.

Secondary takeaway:

- optical signals plus deep learning can recover clinically meaningful ICP information.

## Narrative direction

Use this narrative pattern:

- open with a strong one-line breakthrough
- immediately ground it in the clinical problem
- then move through solution, sensing principle, ML bridge, evidence, interpretation, and impact

The preferred page flow is:

1. Title / Breakthrough
2. Why ICP Matters
3. What SafeICP Is
4. How the Device Sees Through the Skull
5. From Optical Signal to ICP
6. ML Setup and Data
7. Qualitative Model Behavior
8. Quantitative Results and Metrics
9. What the Results Mean
10. Impact and Next Steps
11. Reference Page: Collaborators
12. Reference Page: Extra Results

You may refine these page titles, but keep the same logic unless there is a strong reason not to.

## Structural constraints

Apply these decisions:

- keep the live core focused on **clinical problem -> device concept -> ML pipeline -> results -> impact**
- fold dataset and cohort context into the **ML Setup and Data** page
- do **not** create a separate standalone page for cohorts/validation unless absolutely necessary
- do **not** make ICP-wave physiology a major standalone section unless it is needed for comprehension
- do **not** create a dedicated safety page unless it materially improves the live narrative
- keep collaborators light early and fuller near the end

Collaborator handling:

- allow a small collaborator/context strip on the early context page
- include a fuller collaborators/acknowledgements reference page near the end

## Source files to use

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

## What to emphasize

Highest emphasis:

- clinical problem and why invasive ICP monitoring is limiting
- SafeICP concept and device
- ML story
- results and metrics

Secondary emphasis:

- impact and next steps

Lower emphasis as standalone topics:

- detailed physiology
- dedicated safety section
- dedicated cohorts/validation chapter

## Output format

Produce a Markdown document with these sections:

### 1. Overall Narrative Arc

Write a short summary of the full story in a few paragraphs.

### 2. Page-by-Page Structure

For each page, include:

- `Page Number`
- `Working Title`
- `Narrative Purpose`
- `Key Message`
- `Content Blocks`
- `Source Material`
- `Suggested Visuals / Figures`
- `What To Avoid`
- `Transition To Next Page`

Keep each page description concise but actionable.

### 3. Live Core vs Reference Layer

Explicitly identify:

- which pages belong to the core live seminar flow
- which pages are reference/support pages

### 4. Open Questions / Content Gaps

List any missing information, unclear figure choices, or decisions that should be resolved before page-by-page production.

## Quality bar

The result should feel like a real presentation blueprint, not a summary of the report.

It must:

- be presentation-oriented
- preserve scientific credibility
- remain understandable to a mixed audience
- avoid generic or overly broad page definitions
- be concise enough to guide implementation page by page later
