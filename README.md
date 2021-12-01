# Mapbox
Data Visualization by Nick Waggoner as part of academia at the University of Colorado Colorado Springs

Description:
Version control for embedded mapbox map onto personal website
Includes public NASA landslide data from 1988-2017
Visualizes landslide dataset on a GIS tileset using the Mapbox tool. 

*********************************************************************
Visualization Version 1.0.3 -- Description of functionality
*********************************************************************
The current mapbox GIS data visualization is live and deployed on heroku: https://nswagg-website-embed.herokuapp.com
*Note, the heroku deployment is just a web visualization of the project
and is also embedded on my personal website: https://nswagg.com/about/academic-projects/

The application features clickable data points, where each circle represents a landslide sometime between 1988-2017. The data fields viewed on click include:
    - The number of fatalities
    - The size of the landslide
    - The date and time of the landslide

Each point includes the title of the landslide occurence. The title is clickable and should redirect the user to the web article 
detailing the news report covering the landslide if applicable (i.e. the news article is still live on the internet)

The title header on the legend is also clickable and will redirect to the data source.
The upper right-hand corner will make the visualization fullscreen.

The fault line toggling and time slider were not able to be implemented for this iteration due to an issue with the format of the data from NASA