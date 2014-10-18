var Application = {};
    Application.timer = {};

//Create a timer and 
(function() {
    
    var Timer = function() {
        this.startTime = 0;
        this.endTime = 0;
        this.shouldLog = true;
        this.showInDom = true;
        this.fname = "";
    };
    
    Timer.prototype.resetTimer = function() {
        this.startTime = 0;
        this.endTime = 0;
        this.fname = ""
    };
    
    Timer.prototype.constructResultsTable = function() {
        var table = $('<table id="results-table">');
        var tableHead = "<tr><th>Function Name</th><th>Execution Time</th></tr>";
        table.append(tableHead);
        $('body').append(table);
        this.resultsTable = table;
        return table;
    };
    
    Timer.prototype.addResultsToDom = function(fname, executionMessage, timeDiff, units) {
        if (!this.resultsTable) {
            this.constructResultsTable();
        }
        var fnameTd = '<td class="functionName">' + fname +'</td>';
        var messageTd = '<td class="executionMessage">' + executionMessage + '</td>';
        var timeDiffTd = '<td class="timeDifference">' + timeDiff + units + '</td>';
        var tableRow = '<tr>' + fnameTd + messageTd + timeDiffTd + '</tr>'
        $(this.resultsTable).append(tableRow);
    };
    
    Timer.prototype.displayTotalTime = function () {
        var fname = this.fname,
            executionMessage = " has completed execution in : ",
            timeDiff = this.endTime - this.startTime,
            units = " ms",
            displayMessage = fname + executionMessage + timeDiff + units;
        if (this.showInDom) {
            this.addResultsToDom(fname, executionMessage, timeDiff, units);
        }
        console.log(displayMessage);
    }
    
    Timer.prototype.start = function(functionName, shouldLog, showInDom) {
        this.resetTimer();
        if (functionName) {
            this.fname = functionName;
        }
        this.shouldLog = shouldLog ? shouldLog : false;
        this.showInDom = showInDom ? showInDom : false; 
        this.startTime = new Date().getTime();
    };
    
    Timer.prototype.stop = function() {
        this.endTime = new Date().getTime();
        if (this.shouldLog) {
            this.displayTotalTime();
        }
    };
    
    Application.timer = new Timer();

})();         
