# Project 1: Sales Dataset Preparation

The 1,000-order retail dataset that every other project builds on.

| | |
|---|---|
| **Source folder** | [`Task 1/Dataset.csv`](https://github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship/tree/main/Task%201) in the original repository |
| **Tools** | CSV |
| **Part of** | ApexPlanet Data Analytics Internship |

## Project objective
Provide one consistent, analysis-ready sales dataset that SQL (Project 2) and Power BI (Project 3) can both use.

## Problem statement
Order records need typed dates and numbers and no blank fields before sales can be queried and charted. The stored file already uses placeholders for missing values: Age is 0 in 20 rows and City is "Unknown" in 13 rows.

## Dataset description
`Dataset.csv`: 1,000 rows, 14 columns (Order_ID, Order_Date, Customer_ID, Customer_Name, Age, Gender, City, Product, Category, Quantity, Unit_Price, Total_Sales, Month_name, Day_name). Orders run from 01-01-2025 to 01-01-2026 (5 rows are dated 01-01-2026). 947 distinct customers, 8 named cities plus "Unknown", 6 products in 5 categories.

## Tools and technologies
- CSV

## Methodology
1. Order data stored as a single flat file with one row per order line.
2. Derived calendar columns (Month_name, Day_name) are included so sales can be grouped by month and weekday.
3. No blank cells remain: missing ages are stored as 0 and missing cities as "Unknown".
4. Total_Sales equals Quantity x Unit_Price in all 1,000 rows.

## Key analysis performed
- Column and data-type profile of the 14 fields.
- Missing-value and duplicate check (8 Order_IDs appear twice, so there are 992 unique Order_IDs).

## Important findings
- 1,000 rows and 14 columns; no empty cells.
- 992 unique Order_IDs: 8 IDs repeat (the Task 4 deck notes this and counts orders as rows).
- 20 ages are stored as 0 and 13 cities as "Unknown"; later projects handle these explicitly.
- Total sales across the file are ₹139,399,439.65.

## Project screenshots

No screenshots are available in the original repository for this project.

## Not available in the repository
The repository holds the finished CSV only. The data source and any cleaning script or notebook for this task are not included.

## Repository link
[github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship](https://github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship/tree/main/Task%201)

[Back to the portfolio home](../../README.md)
