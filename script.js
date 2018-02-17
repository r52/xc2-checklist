var highlight = "table-success";

var store = JSON.parse(localStorage.getItem("xc2-checklist"));

if (store == null) {
    store = new Set();
} else {
    store = new Set(store);
}

function saveStore() {
    localStorage.setItem("xc2-checklist", JSON.stringify([...store]));
}

function resetAll() {
    store.clear();
    $("tr[data-uniqueid]").removeClass(highlight);
    saveStore();
}

function toggleElement(e, counterElement) {
    var id = $(e).attr("data-uniqueid");
    var currentCounter = parseInt($(counterElement).text(), 10);
    if (store.has(id)) {
        store.delete(id);
        $(e).removeClass(highlight);
        $(counterElement).text(currentCounter - 1);
    } else {
        store.add(id);
        $(e).addClass(highlight);
        $(counterElement).text(currentCounter + 1);
    }

    saveStore();
}

var tables = ["quests", "quests-dlc", "quests-blade", "blades", "blades-ng", "shopdeeds", "uniquemonsters", "mercmissions", "secretareas", "expman", "bspon", "foorara", "doubloons"];
var defs = {
    "quests-fil": true,
    "quests-col": [{
            field: 'name',
            title: 'Name',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'area',
            title: 'Area',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'giver',
            title: 'Giver',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'prereqs',
            title: 'Prerequisites',
            sortable: false,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "quests-dlc-fil": true,
    "quests-dlc-col": [{
            field: 'name',
            title: 'Name',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'prereqs',
            title: 'Prerequisites',
            sortable: false,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'description',
            title: 'Description',
            sortable: false
        }
    ],
    "quests-blade-fil": true,
    "quests-blade-col": [{
            field: 'name',
            title: 'Name',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'blade',
            title: 'Blade',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'prereqs',
            title: 'Prerequisites',
            sortable: false,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'description',
            title: 'Description',
            sortable: false
        }
    ],
    "blades-fil": true,
    "blades-col": [{
            field: 'blade',
            title: 'Blade',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'role',
            title: 'Role',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'stat',
            title: 'Stat Modifier',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'weapon',
            title: 'Weapon',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'element',
            title: 'Element',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'acquisition',
            title: 'Acquisition',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "blades-ng-fil": true,
    "blades-ng-col": [{
            field: 'blade',
            title: 'Blade',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'role',
            title: 'Role',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'stat',
            title: 'Stat Modifier',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'weapon',
            title: 'Weapon',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'element',
            title: 'Element',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'acquisition',
            title: 'Acquisition',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "shopdeeds-fil": true,
    "shopdeeds-col": [{
            field: 'shop',
            title: 'Shop',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'area',
            title: 'Area',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'benefit',
            title: 'Benefit',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'numitems',
            title: '# of Items Sold',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'merc',
            title: 'Required Merc Mission(s)',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "uniquemonsters-fil": true,
    "uniquemonsters-col": [{
            field: 'name',
            title: 'Name',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'level',
            title: 'Level',
            sortable: true,
            filterControl: 'select',
            filterStrictSearch: true
        },
        {
            field: 'species',
            title: 'Species',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'nation',
            title: 'Nation',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'spawntime',
            title: 'Spawntime',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "mercmissions-fil": true,
    "mercmissions-col": [{
            field: 'name',
            title: 'Name',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'area',
            title: 'Area',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        },
        {
            field: 'notes',
            title: 'Notes',
            sortable: true,
            filterControl: 'input',
            filterStrictSearch: false
        }
    ],
    "secretareas-fil": false,
    "secretareas-col": [{
            field: 'name',
            title: 'Name',
            sortable: true
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true
        },
        {
            field: 'description',
            title: 'Description'
        }
    ],
    "expman-fil": false,
    "expman-col": [{
            field: 'name',
            title: 'Name',
            sortable: true
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true
        },
        {
            field: 'mark',
            title: 'Marker',
            sortable: true
        },
        {
            field: 'description',
            title: 'Description'
        }
    ],
    "bspon-fil": false,
    "bspon-col": [{
            field: 'id',
            title: '#',
            sortable: true
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true
        },
        {
            field: 'mark',
            title: 'Marker',
            sortable: true
        },
        {
            field: 'description',
            title: 'Description'
        }
    ],
    "foorara-fil": false,
    "foorara-col": [{
            field: 'id',
            title: '#'
        },
        {
            field: 'location',
            title: 'Location'
        },
        {
            field: 'mark',
            title: 'Marker'
        },
        {
            field: 'description',
            title: 'Description'
        }
    ],
    "doubloons-fil": false,
    "doubloons-col": [{
            field: 'id',
            title: '#',
            sortable: true
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true
        },
        {
            field: 'mark',
            title: 'Marker',
            sortable: true
        },
        {
            field: 'description',
            title: 'Description'
        }
    ],
    "trust-col": [{
            field: 'name',
            title: 'Name',
            sortable: true
        },
        {
            field: 'category',
            title: 'Category',
            sortable: true
        },
        {
            field: 'trust',
            title: 'Trust',
            sortable: true
        },
        {
            field: 'location',
            title: 'Location',
            sortable: true
        },
        {
            field: 'shop',
            title: 'Shop',
            sortable: true
        },
        {
            field: 'cost',
            title: 'Cost (at Dev Lv.5)',
            sortable: true
        }
    ]
};

$(function() {
    var data;
    $.getJSON('data.min.json', function(j) {
        data = j;

        // craft tables
        for (let tab of tables) {
            function counterId(tab) {
                return tab + "-completed-counter";
            };

            (function(t) {
                $('#' + t + '-table').bootstrapTable({
                    data: data[t],
                    striped: true,
                    uniqueId: "uid",
                    filterControl: defs[t + "-fil"],
                    hideUnusedSelectOptions: true,
                    columns: defs[t + "-col"],
                    onClickRow: function(row, $element, field) {
                        var currentTab = $element.parents("div.tab-pane").attr("id");
                        toggleElement($element, $("#" + counterId(currentTab)));
                    },
                    onPostBody: function(data) {
                        var completedCount = 0;
                        data.forEach(function(element) {
                            if (store.has(element.uid)) {
                                ++completedCount;
                                $("tr[data-uniqueid='" + element.uid + "']").addClass(highlight);
                            }
                        });
                        var counterString =
                            " (<span id=\"" + counterId(tab) + "\">" +
                            completedCount +
                            "</span>/" +
                            data.length +
                            ")";
                        $("h3#" + tab + "-header").append(counterString);
                    }
                });
            })(tab);
        }

        // trust
        $('#trust-table').bootstrapTable({
            data: data["trust"],
            striped: true,
            columns: defs["trust-col"]
        });
    });

    $("#reset-yes").click(function() {
        resetAll();
    });
});
