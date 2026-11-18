insert into products(name, category, price, stock, sku, description)
values
('Ultra-Wide Curved Monitor', 'Electronics', 349.99, 15, 'ELEC-MN-201', '34-inch QHD curved display with 144Hz refresh rate.'),
('Insulated French Press', 'Home & Kitchen', 38.50, 40, 'HOME-FP-202', 'Double-walled stainless steel coffee maker with mesh filter.'),
('Non-Slip Yoga Mat', 'Fitness', 45.00, 60, 'FITN-YM-203', 'Eco-friendly 6mm thick mat with alignment markers.');


-- querying multiple values not all at a time using IN
select name, category, price, stock 
from products
where sku in ('ELEC-MN-201', 'FITN-YM-203', 'APRL-TS-004', 'FITN-DB-006');