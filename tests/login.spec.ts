import { test, expect } from '@playwright/test';
import * as config from '../config/config'



test.skip('test homepage', async ({ page }) => {
  console.log('testing homepage...')
  await page.goto(config.baseUrl)
  await expect(page.locator(config.homePage_hero_text)).toContainText('Neighbors helping neighbors')
})

test.skip('test login', async ({ page }) => {
  console.log('testing login...')
  await page.goto(config.baseUrl)
  await page.locator(config.loginButton_locator).click()
  await expect(page.locator('//html/body/div/main/section/div/div[2]/div/div[3]/form/button')).toContainText('Continue with G')
})


test.skip('test login screenshot', async ({ page }) => {
  console.log('testing login screenshot...')
  await page.goto(config.baseUrl)
  await page.locator(config.loginButton_locator).click()
  await page.waitForTimeout(6000)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('test-scrn.png', { maxDiffPixels: 100 });
})


test('test login screenshot_2', async ({ page }) => {
  console.log('testing login screenshot...')
  await page.goto(config.baseUrl)
  await page.locator(config.loginButton_locator).click()
  await page.waitForTimeout(6000)
  await expect(page).toHaveScreenshot('test-scrn.png', { maxDiffPixels: 200, fullPage: true });
})



test.skip('generated test', async ({ page }) => {
  await page.goto('https://agreeable-bush-0aea8c110.2.azurestaticapps.net/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('vy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456!@#aZ');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Register Form' })).toHaveText("Register Form");
});