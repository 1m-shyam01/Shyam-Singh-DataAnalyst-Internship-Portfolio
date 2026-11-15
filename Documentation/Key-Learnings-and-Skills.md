# Key learnings and technical skills

Only skills that are visible in the four projects are listed. The project number shows where each skill is used.

## Programming languages
- SQL (DDL, DML, queries) (Project 2)
- DAX (Project 3)
- Power Query M (Project 3)

## Data analysis
- Descriptive statistics: mean, median, range (Project 4)
- Trend and month-over-month comparison (Project 4)
- Pearson correlation (Project 4)
- Aggregation, grouping and ranking (Top N) (Project 2)
- Above-average analysis with subqueries (Project 2)

## Data visualization
- Area, bar, column, donut and scatter charts (Project 3, 4)
- KPI cards and slicers (Project 3)
- Chart titles and layout for one-page dashboards (Project 3)

## Database management
- CREATE TABLE with typed columns (Project 2)
- ALTER TABLE and UPDATE with CASE (Project 2)
- GROUP BY, HAVING, ORDER BY, LIMIT (Project 2)

## Data cleaning
- Type conversion, trimming text, replacing blanks (Project 3)
- Placeholder handling for missing Age and City (Project 1, 3)
- Duplicate Order_ID awareness (Project 1, 4)

## Business intelligence
- Power BI report building with slicers (Project 3)
- Calculated columns and a measure (Project 3)
- Turning results into business insights (Project 4)

## Reporting and documentation
- Slide deck with findings and caveats (Project 4)
- Commented SQL scripts (Project 2)

## Version control
- GitHub repository with the four project folders (Project 1, 2, 3, 4)

## Tools
- SQL
- Power BI
- Power Query (M)
- DAX
- PowerPoint
- CSV
- Git and GitHub

## Not listed
Python and Excel do not appear in the repository, so they are not claimed here.

What the four projects taught me, based on the work in the repository.

## Technical concepts learned
- How a flat sales file maps to a typed SQL table, and why derived columns (age group, month, weekday) make grouping easier.
- The difference between a measure (evaluated for the current filter) and a calculated column (stored per row) in DAX.
- Why mean and median order value differ when a few large orders exist.
- Why a correlation between price and sales is expected when Total Sales is built as Quantity x Unit Price.

## Tools and technologies used
- SQL: grouping, HAVING with scalar subqueries, CASE, LIMIT.
- Power BI: Power Query steps, DAX columns and measures, cards, slicers and area, bar and donut charts.
- PowerPoint: native charts and structured data storytelling.

## Analytical techniques applied
- Top-N ranking by sales and by quantity.
- Comparing groups to an overall average.
- Month-over-month rise and fall, and order volume against sales.
- Share-of-total analysis (top 5 products = 85.8% of sales).

## Problem-solving demonstrated
- Noticed that 8 Order_IDs repeat and documented it on the slide instead of hiding it.
- Handled missing ages explicitly: zero-filled in SQL (average age 40.5) and excluded in the deck (average age 41.4).
- Noticed that grouping by month name puts 5 orders dated 01-01-2026 into January and added a footnote.

## Business insights generated
- Sales peak in March and dip in August and September.
- Electronics and the Laptop lead; sales are otherwise spread evenly across products.
- Patna leads cities by sales and orders.

## Challenges and solutions
| Challenge | What I did |
|---|---|
| Repeated Order_IDs (8 IDs appear twice). | Counted orders as rows and stated the 992-unique-ID figure on the slide. |
| Missing ages stored as 0. | Kept them out of age statistics in the deck and showed both averages. |
| Month names merge Jan 2025 with 5 orders from 01-01-2026. | Added a footnote on the summary slide so the January total reads correctly. |
| Moderate correlation could be misread as cause and effect. | Added a slide note that Total Sales = Quantity x Unit Price and correlation is not causation. |
