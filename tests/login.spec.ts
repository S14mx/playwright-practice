import { test, expect } from '@playwright/test';
import * as config from '../config/config'



test('test homepage', async ({ page }) => {
  console.log('testing homepage...')
  await page.goto(config.baseUrl)
  await expect(page.locator(config.homePage_hero_text)).toContainText('Neighbors helping neighbors')
})

test('test login', async ({ page }) => {
  console.log('testing login...')
  await page.goto(config.baseUrl)
  await page.locator(config.loginButton_locator).click()
  await expect(page.locator('//html/body/div/main/section/div/div[2]/div/div[3]/form/button')).toContainText('Continue with G')
})


test('test login screenshot', async ({ page }) => {
  console.log('testing login screenshot...')
  await page.goto(config.baseUrl)
  await page.locator(config.loginButton_locator).click()
  await page.waitForTimeout(3000)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('test-scrn.png');
})