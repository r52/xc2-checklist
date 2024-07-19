const highlight = "table-success";

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
    $("span[id$='-completed']").text("0");
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

function importError() {
    $("#importModal").modal('hide');
    $("#import-fail").collapse('show');
    setTimeout(() => { $("#import-fail").collapse('hide'); }, 5000);
}

function importProgress() {
    var cstr = $("#import-code").val();
    if (!cstr) {
        importError();
        return;
    }

    var jstr = LZString.decompressFromBase64(cstr);
    if (!jstr) {
        importError();
        return;
    }

    try {
        var a = JSON.parse(jstr);
    } catch (e) {
        importError();
        return;
    }

    // success
    localStorage.setItem("xc2-checklist", jstr);
    $("#importModal").modal('hide');
    $("#import-success").collapse('show');
}

var tables = ["quests", "quests-dlc", "quests-blade", "blades", "blades-ng", "blades-dlc", "shopdeeds", "uniquemonsters", "hearttoheart", "mercmissions", "secretareas", "expman", "bspon", "foorara", "doubloons"];
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
        filterControl: 'select',
        filterStrictSearch: true
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
    "blades-dlc-fil": true,
    "blades-dlc-col": [{
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
        filterControl: 'select',
        filterStrictSearch: true
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
        filterControl: 'select',
        filterStrictSearch: true
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
    "hearttoheart-fil": true,
    "hearttoheart-col": [{
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
        filterControl: 'select',
        filterStrictSearch: true
    },
    {
        field: 'location',
        title: 'Location',
        sortable: true,
        filterControl: 'input',
        filterStrictSearch: false
    },
    {
        field: 'party',
        title: 'Party',
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
        filterControl: 'select',
        filterStrictSearch: true
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

$(function () {
    var data;
    $.getJSON('data.min.json', function (j) {
        data = j;

        // craft tables
        for (let tab of tables) {
            (function (t) {
                $('#' + t + '-table').bootstrapTable({
                    data: data[t],
                    striped: true,
                    uniqueId: "uid",
                    filterControl: defs[t + "-fil"],
                    hideUnusedSelectOptions: true,
                    columns: defs[t + "-col"],
                    onClickRow: function (row, $element, field) {
                        toggleElement($element, $("#" + t + "-completed"));
                    },
                    onPostBody: function (data) {
                        var completedCount = 0;
                        data.forEach(function (element) {
                            if (store.has(element.uid)) {
                                ++completedCount;
                                $("tr[data-uniqueid='" + element.uid + "']").addClass(highlight);
                            }
                        });
                        $("#" + t + "-completed").text(completedCount);
                        $("#" + t + "-total").text(data.length);
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

    // Import/export dialog
    $('#exportModal').on('show.bs.modal', () => {
        var jstr = JSON.stringify([...store]);
        var cstr = LZString.compressToBase64(jstr);
        var modal = $(this);
        modal.find('#export-code').val(cstr);
    })

    // buttons
    const popOpts = {
        placement: 'top',
        title: 'Are you sure?',
        html: true,
        sanitize: false,
        content: 'This will overwrite your current progress<div class="btn-group btn-group-sm" role="group" aria-label="Confirmation"><button type="button" class="btn btn-sm btn-success" id="popover-submit">Yes, do it</button><button type="button" class="btn btn-sm btn-danger" id="popover-cancel">No, get me out of here!</button></div>',
    }

    const popover = new bootstrap.Popover($("#import-save"), popOpts);

    $("#import-save").on('shown.bs.popover', () => {
        $('#popover-cancel').click(() => {
            $("#importModal").modal('hide');
        });
        $('#popover-submit').click(() => {
            importProgress();
        });
    });

    $("#export-copy").tooltip();
    $("#export-copy").click(() => {
        $("#export-code").select();
        document.execCommand("copy");
    });

    $("#reset-yes").click(() => {
        resetAll();
    });
});
