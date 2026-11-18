--- before deleting I am inserting some demo data, so that existing data wont affect

-- insert into products(name, category, price, stock, sku, description)
-- values
-- ('Old Gen USB-A Hub', 'Clearance', 9.99, 0, 'CLRN-HB-301', 'Discontinued 4-port USB 2.0 hub.'),
-- ('Faux Leather Phone Case', 'Clearance', 5.50, 0, 'CLRN-PC-302', 'Clearance phone cover for older models.'),
-- ('Micro-USB Braided Cable', 'Accessories', 7.99, 100, 'ACCS-CB-303', 'Legacy charging cable, 6ft length.'),
-- ('Basic Wired Mouse', 'Accessories', 12.00, 0, 'ACCS-MS-304', 'Standard optical mouse, out of stock.'),
-- ('Desk Cable Organizer', 'Office', 14.50, 30, 'OFFC-CO-305', 'Silicone clip holder for desk wires.'),
-- ('Acrylic Monitor Stand', 'Office', 29.00, 5, 'OFFC-MS-306', 'Clear riser stand for single monitor.');


-- select name, price, category, sku
-- from products
-- where sku = 'CLRN-PC-302';

delete from products
where sku = 'CLRN-PC-302';

select name, price, category, sku
from products
where sku = 'CLRN-PC-302';