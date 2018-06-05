import log from './logger';
import { server as baseServer, routeConfiguringFunction } from 'appium-base-driver';
import { XCUITestDriver } from './driver';

async function startServer (port, address, relaxedSecurityEnabled) {
  let driver = new XCUITestDriver({port, address});
  let router = routeConfiguringFunction(driver);
  let server = await baseServer(router, port, address);
  driver.relaxedSecurityEnabled = relaxedSecurityEnabled;
  log.info(`XCUITestDriver server listening on http://${address}:${port}`);
  return server;
}

export { startServer };
