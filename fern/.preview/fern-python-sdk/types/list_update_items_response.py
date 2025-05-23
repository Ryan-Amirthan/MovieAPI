# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
from ..core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .list_update_items_response_results_item import ListUpdateItemsResponseResultsItem


class ListUpdateItemsResponse(UniversalBaseModel):
    status_message: typing.Optional[str] = None
    results: typing.Optional[typing.List[ListUpdateItemsResponseResultsItem]] = None
    success: typing.Optional[bool] = None
    status_code: typing.Optional[int] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
