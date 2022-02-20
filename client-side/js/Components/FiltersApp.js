import Resources from "./Resources.js";

export default function Filters() {
    return `
    <div class="row pg-cont" style="background-color: #d0cfce;">
        <div class="col-sm-2 pg-wrap">
            <div class="container">
                <h2>Filter Results By:</h2>
                <p>LOCATION:</p>
                <iframe width="250" height="250" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwY5NtXrpNogRFtmfnDlkzeU&key=AIzaSyDrUTfivqK6E0je5MjI25olB7zrIaiSIqc"></iframe>
                <form>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="">Miles
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="">City
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="">Zip Code
                    </label>
                </form><br>
                <p>RESOURCE:</p>
                <form>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-food-resources" class="filter-food-resources" value="food" name="filter-food-resources">Food
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-care-resources" class="filter-care-resources" value="care" name="filter-care-resources">Care
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-education-resources" class="filter-education-resources" value="education" name="filter-education-resources">Education
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-goods-resources" class="filter-goods-resources" value="goods" name="filter-goods-resources">Goods
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-health-resources" class="filter-health-resources" value="health" name="filter-health-resources">Health
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-housing-resources" class="filter-housing-resources" value="housing" name="filter-housing-resources">Housing
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-legal-resources" class="filter-legal-resources" value="legal" name="filter-legal-resources">Legal
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-money-resources" class="filter-money-resources" value="money" name="filter-money-resources">Money
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-transit-resources" class="filter-transit-resources" value="transit" name="filter-transit-resources">Transit
                    </label><br>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="filter-work-resources" class="filter-work-resources" value="work" name="filter-work-resources">Work
                    </label><br>
                    </form>
                    <button id="filter-btn">Filter</button>
            </div>
        </div>
        
        <div class="col-sm-10" style="background-color:#f7f8f8;">
            <div class="resource-container" id="resource-container">
            </div>
        </div>
    </div>
    `;
}