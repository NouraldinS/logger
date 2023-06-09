BEGIN;

DROP TABLE IF EXISTS logs;

CREATE TABLE logs (
  timestamp INT PRIMARY KEY,
  openTime INT NOT NULL,
  open DECIMAL NOT NULL,
  high DECIMAL NOT NULL,
  low DECIMAL NOT NULL,
  close DECIMAL NOT NULL,
  volume DECIMAL NOT NULL,
  closeTime INT NOT NULL
);

COMMIT;