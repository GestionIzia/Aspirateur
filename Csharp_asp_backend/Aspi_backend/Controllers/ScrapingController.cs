using Microsoft.AspNetCore.Mvc;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using Aspi_backend.Models;


namespace Aspi_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScrapingController : ControllerBase
    {
        [HttpGet]
        [Route("scrape-job-offers")]
        public IActionResult ScrapeJobOffers()
        {
            var edgeDriverPath = "C:\\Users\\Bradley GOEH AKUE\\Desktop\\msedgedriver.exe";
            var edgeOptions = new EdgeOptions();
            var driver = new EdgeDriver(edgeDriverPath, edgeOptions);

            driver.Navigate().GoToUrl("https://www.welcometothejungle.com/fr/jobs?query=apprentissage");
            System.Threading.Thread.Sleep(5000);

            var cardElements = driver.FindElements(By.XPath("//*[@id='pages_jobs']/div[2]/div/ol/div[position() <= 3]/li/div/div"));
            var cardinfos = new List<CardInfos>();

            if (cardElements != null)
            {
                Console.WriteLine("Offres en apprentissage sur Welcome to the Jungle :");
                foreach (var cardElement in cardElements)
                {
                    cardinfos.Add(new CardInfos()
                    {
                        CompanieName = cardElement.FindElement(By.XPath("./div[1]/span")).Text,
                        JobTitle = cardElement.FindElement(By.XPath("./div[2]/a/h4/div")).Text,
                        ContractType = cardElement.FindElement(By.XPath("./div[2]/div[2]/div/span")).Text,
                        Location = cardElement.FindElement(By.XPath("./div[2]/div[1]/p/span/span")).Text,
                        Date = cardElement.FindElement(By.XPath("./div[2]/div[3]/div[1]/p/time/span")).Text,
                        UrlOffer = cardElement.FindElement(By.XPath("./div[2]/a")).GetAttribute("href")
                    });
                }
            }
            else
            {
                Console.WriteLine("Aucune offre en apprentissage trouvée sur Welcome to the Jungle.");
                driver.Quit();

            }


            return Ok(cardinfos); // Retourne les données scrappées en tant que réponse JSON
        }
    }
}