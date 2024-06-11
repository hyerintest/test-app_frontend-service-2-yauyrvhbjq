'use strict';

export const RESPONSE_CODE = {
  OK: 200,
  LOCKED: 423,
  FAIL: 'FAIL',
  NOT_FOUND: 404
};

export interface RESPONSE {
  statusCode: number;
  success: boolean;
  code: number;
  http_status_code: number;
  result: any;
  status: number;
}
